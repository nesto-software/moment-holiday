import { EventEmitter } from "events";
import LRUCache = require("quick-lru");
import { IHolidayDefinitionInternal } from "../holiday-definition.interface";
import { IDatabaseCacheConfiguration } from "./database-cache-configuration.interface";
import { DatabaseError } from "./database-error";
import { RedisDatabaseCacheConfiguration } from "./redis-database-cache-configuration";
import { ITenant } from "./tenant.interface";

/**
 * This class represents the base for database implementations.
 * Plugin developers must use it to write their storage/retrieval logic using
 * their database specific database driver.
 * IMPORTANT: Please make sure to share one single AbstractDatabase object over
 * all database configurations! You may want to use a singleton in your application.
 * The reason is that the database object caches read requests and invalidates its
 * cache once a write operation is performed.
 * If you used more than one instance, this will result in an inconsistent application
 * state because the cache of other database objects does not get invalidated after write
 * operations on other instances.
 */
export abstract class AbstractDatabase<T> {
    private static readonly databaseIds: Set<string> = new Set<string>();
    private _isCacheDirty: boolean = false;
    private readonly incomingEventEmitter: EventEmitter;
    private readonly outgoingEventEmitter: EventEmitter;
    public static readonly CACHE_INVALIDATION_EVENT = "cache_invalidation";
    public static readonly NO_TENANT_ID = "__NO_TENANT__";
    private readonly lastModification: LRUCache<string, number> = new LRUCache(
        {
            maxSize: 10000,     // should be ~the number of expected tenants
        },
    );

    /**
     * Create a new database instance.
     * Only one instance per database should be created and assigned a unique id for the entire application.
     * @param _id A unique object identifier; works as hash for the entire database object
     * @param databaseCacheConfiguration the database cache configuration to use - for caching behaviour and consistency
     */
    public constructor(protected readonly _id: string,
        protected readonly databaseCacheConfiguration?: IDatabaseCacheConfiguration) {

        // note: the following is a requirement for the cache to work
        if (AbstractDatabase.databaseIds.has(_id)) {
            throw new Error("Must not create more than one database object with the same id.");
        } else {
            AbstractDatabase.databaseIds.add(_id);
        }

        if (databaseCacheConfiguration && databaseCacheConfiguration instanceof RedisDatabaseCacheConfiguration) {
            this.incomingEventEmitter = databaseCacheConfiguration.getIncomingEventEmitter();
            this.outgoingEventEmitter = databaseCacheConfiguration.getOutgoingEventEmitter();
        } else {
            this.incomingEventEmitter = this.outgoingEventEmitter = new EventEmitter();
        }

        this.addCacheInvalidationListener((databaseId: string, tenantId?: string) => {

            // only listen to the events which target this db instance
            if (this.id === databaseId) {
                if (tenantId) {
                    this.lastModification.set(tenantId, Date.now());
                } else {
                    this.lastModification.set(AbstractDatabase.NO_TENANT_ID, Date.now());
                }
            }
        });
    }

    private addCacheInvalidationListener(cb: (databaseId: string, tenantId?: string) => void) {
        this.incomingEventEmitter.on(AbstractDatabase.CACHE_INVALIDATION_EVENT, cb);
    }

    public getLastModification(tenant?: ITenant): number | undefined {
        const tenantIdInternal = (tenant) ? tenant.getIdentifier() : AbstractDatabase.NO_TENANT_ID;

        return this.lastModification.get(tenantIdInternal);
    }

    protected async abstract getHolidayDefinitionsInternal(tenant?: ITenant): Promise<IHolidayDefinitionInternal[]>;

    protected async abstract addHolidayDefinitionInternal(holidayDefinition: T,
        tenant?: ITenant): Promise<void>;

    protected async abstract updateHolidayDefinitionInternal(holidayDefinition: T,
        tenant?: ITenant): Promise<void>;

    protected async abstract deleteHolidayDefinitionInternal(holidayNameToDelete: string,
        tenant?: ITenant): Promise<void>;

    public async getHolidayDefinitions(tenant?: ITenant): Promise<IHolidayDefinitionInternal[]> {
        return await this.getHolidayDefinitionsInternal(tenant);
    }

    public async addHolidayDefinition(holidayDefinition: T, tenant?: ITenant): Promise<void> {
        try {
            await this.addHolidayDefinitionInternal(holidayDefinition, tenant);
            this.outgoingEventEmitter.emit(AbstractDatabase.CACHE_INVALIDATION_EVENT,
                this.id,
                (tenant) ? tenant.getIdentifier() : AbstractDatabase.NO_TENANT_ID);
        } catch (error) {
            throw new DatabaseError(error);
        }
    }

    public async updateHolidayDefinition(holidayDefinition: T, tenant?: ITenant): Promise<void> {
        try {
            await this.updateHolidayDefinitionInternal(holidayDefinition, tenant);
            this.outgoingEventEmitter.emit(AbstractDatabase.CACHE_INVALIDATION_EVENT,
                this.id,
                (tenant) ? tenant.getIdentifier() : AbstractDatabase.NO_TENANT_ID);
        } catch (error) {
            throw new DatabaseError(error);
        }
    }

    public async deleteHolidayDefinition(holidayNameToDelete: string, tenant?: ITenant): Promise<void> {
        try {
            await this.deleteHolidayDefinitionInternal(holidayNameToDelete, tenant);
            this.outgoingEventEmitter.emit(AbstractDatabase.CACHE_INVALIDATION_EVENT,
                this.id,
                (tenant) ? tenant.getIdentifier() : AbstractDatabase.NO_TENANT_ID);
        } catch (error) {
            throw new DatabaseError(error);
        }
    }

    get cacheConfiguration() {
        return this.databaseCacheConfiguration;
    }

    get id() {
        return this._id;
    }
}
