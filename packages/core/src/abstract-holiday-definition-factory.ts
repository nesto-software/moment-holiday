import mem = require("mem");
import LRUCache = require("quick-lru");
import { Country } from "./country";
import { AbstractDatabase } from "./database/abstract-database";
import { DatabaseConfiguration } from "./database/database-configuration";
import { DisabledDatabaseCacheConfiguration } from "./database/disabled-database-cache-configuration";
import { ITenant } from "./database/tenant.interface";
import { TimebasedDatabaseCacheConfiguration } from "./database/timebased-database-cache-configuration";
import { HolidayDefinition } from "./holiday-definition";
import { IHolidayDefinitionInternal } from "./holiday-definition.interface";
import { AbstractTag } from "./tag/abstract-tag";
import { InTag } from "./tag/in-tag";
import { UserDefinedTag } from "./tag/user-defined-tag";
import { MomentHolidayUtils } from "./utils";

export abstract class AbstractHolidayDefinitionFactory {
    private country: Country | null = null;

    // the database cache which stores the last modification time for tenants
    private readonly DATABASE_LRU_CACHE: LRUCache<string, number> = new LRUCache(
        {
            maxSize: 10000,
        },
    );

    private readonly TENANT_CACHES: LRUCache<string, LRUCache<any, any>> = new LRUCache(
        {
            maxSize: 10000,
        },
    );

    private readonly LOCAL_LRU_CACHE: LRUCache<any, any> = new LRUCache(
        {
            maxSize: 10000,
        },
    );

    /**
     * Create a new country object.
     * This method is called max. one time per factory instance.
     */
    protected abstract createCountry(): Country;

    public getCountry() {
        return this.getCountryInternal();
    }

    private getCountryInternal(): Country {
        if (!this.country) {
            this.country = this.createCountry();
        }

        return this.country;
    }

    // TODO: document that no tenant name must be __NO_TENANT__ and no tenant name must start with __
    private getKeyForTenantAndDatabase(tenantId: string, databaseId: string) {
        return databaseId + "__" + tenantId;
    }

    /**
     * Returns the factory's LRU cache per tenant.
     * Every holiday definition factory needs its own set of caches since every factory emits
     * their own definitions.
     * There is a different cache per tenant since tenants do not share the same definitions for client specific
     * queries.
     * We also need a fast O(1) way to clear a specific tenant's cache entierly.
     */
    protected getCache(tenantId: string): LRUCache<string, LRUCache<any, any>> {
        let tenantCache = this.TENANT_CACHES.get(tenantId);
        if (!tenantCache) {
            tenantCache = new LRUCache(
                {
                    maxSize: 10000,
                },
            );

            this.TENANT_CACHES.set(tenantId, tenantCache);
        }

        return tenantCache;
    }

    /**
     * Returns a LRU cache for calls which do not target the database.
     */
    protected getCacheForLocalUsage(): LRUCache<any, any> {
        return this.LOCAL_LRU_CACHE;
    }

    /**
     * Returns the factory's LRU cache for database queries.
     * It stores the last database modification time for each tenant.
     */
    protected getDatabaseCache(): LRUCache<string, number> {
        return this.DATABASE_LRU_CACHE;
    }

    protected isDatabaseCacheInvalidated(
        databaseConfiguration?: DatabaseConfiguration<any, any>,
        tenant?: ITenant,
    ): boolean {
        if (!databaseConfiguration) {
            return false;
        } else {
            const tenantId = (tenant) ? tenant.getIdentifier() : AbstractDatabase.NO_TENANT_ID;
            const key = this.getKeyForTenantAndDatabase(tenantId, databaseConfiguration.database.id);
            const factoryTimestamp = this.getDatabaseCache().get(key);
            const databaseTimestamp = databaseConfiguration.database.getLastModification(tenant);

            // if database timestamp is undefined then there was never (since program start) a modification
            return databaseTimestamp !== undefined && factoryTimestamp !== databaseTimestamp;
        }
    }

    protected async getClientSpecificHolidays(
        databaseConfiguration?: DatabaseConfiguration<any, AbstractDatabase<any>>,
        tenant?: ITenant,
    ): Promise<IHolidayDefinitionInternal[]> {
        if (databaseConfiguration) {
            const clientSpecificHolidays = await databaseConfiguration.database.getHolidayDefinitions(tenant);

            return clientSpecificHolidays;
        } else {
            return [];
        }
    }

    private createHolidayDefinition(internalHolidayDefinition: IHolidayDefinitionInternal) {
        return new HolidayDefinition(
            internalHolidayDefinition.name,
            internalHolidayDefinition.date,
            internalHolidayDefinition.tags,
        );
    }

    protected getDefinitionsForCountry(): HolidayDefinition[] {
        return this.getCountryInternal().getCountryHolidayDefinitions().map(this.createHolidayDefinition);
    }

    protected getDefinitionsForAdministrativeUnit(unitAbbrev: string): HolidayDefinition[] {
        return this.getCountryInternal().getAdministrativeUnit(unitAbbrev)
            .getHolidayDefinitions()
            .map((definition) => this.getCountryInternal().tagHolidayDefinition(definition, InTag))
            .map(this.createHolidayDefinition);
    }

    protected getDefinitionsForAdministrativeUnits(unitAbbrevs: string[]): HolidayDefinition[] {
        let holidayDefinitions: HolidayDefinition[] = [];
        for (const unitAbbrev of unitAbbrevs) {
            const newDefinitions = this.getCountryInternal().getAdministrativeUnit(unitAbbrev)
                .getHolidayDefinitions()
                .map((definition) => this.getCountryInternal().tagHolidayDefinition(definition, InTag))
                .map(this.createHolidayDefinition);

            // states at the end of the array take precedence
            holidayDefinitions = MomentHolidayUtils.mergeHolidayDefinitions(holidayDefinitions, newDefinitions);
        }

        return holidayDefinitions;
    }

    protected getDefinitionsForAllAdministrativeUnits(): HolidayDefinition[] {
        const initialArray: HolidayDefinition[] = [];

        return this.getCountryInternal().getAdministrativeUnits().reduce((holidays, currentUnit) => {
            const newHolidayDefinitions = currentUnit.getHolidayDefinitions()
                .map((definition) => this.getCountryInternal().tagHolidayDefinition(definition, InTag))
                .map(this.createHolidayDefinition);

            return MomentHolidayUtils.mergeHolidayDefinitions(holidays, newHolidayDefinitions);
        }, initialArray);
    }

    protected async loadDefinitionsIncludingDatabase(
        databaseConfiguration?: DatabaseConfiguration<any, any>,
        dbTenant?: ITenant,
        ...administrativeUnits: Array<string | "ALL">): Promise<HolidayDefinition[]> {

        const clientSpecificHolidays = await this.getClientSpecificHolidays(databaseConfiguration, dbTenant);
        const clientSpecificHolidaysWithTag = clientSpecificHolidays.map((holidayDefinition) => {
            if (!holidayDefinition.tags) {
                holidayDefinition.tags = [];
            }

            holidayDefinition.tags.push(new UserDefinedTag());

            return new HolidayDefinition(holidayDefinition.name, holidayDefinition.date, holidayDefinition.tags);
        });

        return this.loadDefinitions(clientSpecificHolidaysWithTag, ...administrativeUnits);
    }

    protected loadDefinitions(clientSpecificHolidays: HolidayDefinition[] = [],
        ...administrativeUnits: Array<string | "ALL">): HolidayDefinition[] {

        if (administrativeUnits.length === 0) {
            const countryDefinitions = this.getDefinitionsForCountry();

            // client specific holidays take precedence
            return MomentHolidayUtils.mergeHolidayDefinitions(countryDefinitions, clientSpecificHolidays);
        } else if (administrativeUnits.find((unit) => unit === "ALL") !== undefined) {
            const countryDefinitions = this.getDefinitionsForCountry();
            const statesDefinitions = this.getDefinitionsForAllAdministrativeUnits();

            // country definitions take precedence over state definitions during merge
            return MomentHolidayUtils.mergeHolidayDefinitions(statesDefinitions,
                countryDefinitions,
                clientSpecificHolidays);
        } else {
            const countryDefinitions = this.getDefinitionsForCountry();
            const statesDefinitions = this.getDefinitionsForAdministrativeUnits(administrativeUnits);

            // country definitions take precedence over state definitions durng merge
            return MomentHolidayUtils.mergeHolidayDefinitions(statesDefinitions,
                countryDefinitions,
                clientSpecificHolidays);
        }
    }

    private loadDefinitionsCached = mem(this.loadDefinitions, {
        cache: this.getCacheForLocalUsage(),
    });

    public getDefinitions(...administrativeUnits: Array<string | "ALL">): HolidayDefinition[] {

        return this.loadDefinitionsCached([], ...administrativeUnits);
    }

    /**
     * Returns all definitions for the given states and the country.
     * This method determines if country holidays take precedence over state holidays.
     *
     * @param dbConfig the db configuration to use to load client specific holidays
     * @param administrativeUnits the units to query definitions for; it is possible to query the country only
     */
    public async getDefinitionsWithDatabase(
        databaseConfiguration?: DatabaseConfiguration<any, any>,
        ...administrativeUnits: Array<string | "ALL">): Promise<HolidayDefinition[]> {

        // the dbTenant parameter is there for the mem cache key generation
        // function invocations are cached and invalidated for individual tenants
        const _loadDefinitionsIncludingDatabaseProxy = (_dbTenant?: ITenant, ...admUnits: Array<string | "ALL">) => {
            return this.loadDefinitionsIncludingDatabase(databaseConfiguration, _dbTenant, ...admUnits);
        };

        let dbTenant: ITenant | undefined;
        if (databaseConfiguration && databaseConfiguration.tenant) {
            dbTenant = databaseConfiguration.tenant;
        }
        const tenantId = (dbTenant) ? dbTenant.getIdentifier() : AbstractDatabase.NO_TENANT_ID;

        if (databaseConfiguration
            && databaseConfiguration.database.cacheConfiguration instanceof DisabledDatabaseCacheConfiguration) {

            return _loadDefinitionsIncludingDatabaseProxy(dbTenant, ...administrativeUnits);
        }

        if (this.isDatabaseCacheInvalidated(databaseConfiguration, dbTenant)) {
            // invalidate the LRU cache for specific tenant
            this.getCache(tenantId).clear();
            // update last modification timestamp
            if (databaseConfiguration) {
                const lastModificationTimestamp = databaseConfiguration.database.getLastModification(dbTenant);
                if (lastModificationTimestamp) {
                    const key = this.getKeyForTenantAndDatabase(tenantId, databaseConfiguration.database.id);
                    this.getDatabaseCache().set(key, lastModificationTimestamp);
                }
            }
        }

        let maxAge;
        if (databaseConfiguration
            && databaseConfiguration.database.cacheConfiguration instanceof TimebasedDatabaseCacheConfiguration) {
            maxAge = databaseConfiguration.database.cacheConfiguration.maxAgeInMs;
        }

        const cachedFunction = mem(_loadDefinitionsIncludingDatabaseProxy, {
            cache: this.getCache(tenantId),
            maxAge,
        });

        return cachedFunction(dbTenant, ...administrativeUnits);
    }

    public abstract getCountryName(): string;
    public abstract getCountryAbbreviation(): string;

}
