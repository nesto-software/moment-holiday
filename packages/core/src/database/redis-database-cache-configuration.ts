import { EventEmitter } from "events";
import NRP = require("node-redis-pubsub");
import { AbstractDatabase } from "./abstract-database";
import { IDatabaseCacheConfiguration } from "./database-cache-configuration.interface";

interface ICacheInvalidationMessage {
    event: string;
    tenantId?: string;
    databaseId: string;
}

export class RedisDatabaseCacheConfiguration implements IDatabaseCacheConfiguration {
    private readonly incomingEventEmitter: EventEmitter = new EventEmitter();
    private readonly outgoingEventEmitter: EventEmitter = new EventEmitter();
    private static readonly CHANNEL = "MOMENT-HOLIDAY";

    private constructor(private readonly nrp: NRP.NodeRedisPubSub) { }

    /**
     * Establish the redis connection by setting up the listeners.
     */
    private setup(): void {
        this.nrp.on(RedisDatabaseCacheConfiguration.CHANNEL, (_msg) => {
            // the following is a bug in the type declaration! NRP should be generic and msg parameterized
            const msg: ICacheInvalidationMessage = (_msg as any) as ICacheInvalidationMessage;
            if (msg.event === AbstractDatabase.CACHE_INVALIDATION_EVENT) {
                this.incomingEventEmitter.emit(AbstractDatabase.CACHE_INVALIDATION_EVENT, msg.databaseId, msg.tenantId);
            }
        });

        this.outgoingEventEmitter.on(AbstractDatabase.CACHE_INVALIDATION_EVENT,
            (databaseId: string, tenantId?: string) => {

                this.nrp.publish(RedisDatabaseCacheConfiguration.CHANNEL,

                    // the following is a bug in the type declaration! NRP should be generic and msg parameterized
                    {
                        event: AbstractDatabase.CACHE_INVALIDATION_EVENT,
                        tenantId,
                        databaseId,
                    } as any,
                );
            });
    }

    /**
     * Shuts down the redis connection entierly.
     * After calling this method, the database cache behaves as if there was no cache configuration passed,
     * i.e. (default mode).
     * In default mode, the cache gets invalidated for application-local changes only.
     */
    public unregister() {
        this.nrp.quit();
        this.outgoingEventEmitter.removeAllListeners();

        // wire the incoming event emitter to the outgoing one
        this.outgoingEventEmitter.on(AbstractDatabase.CACHE_INVALIDATION_EVENT,
            (databaseId: string, tenantId?: string) => {

                this.incomingEventEmitter.emit(AbstractDatabase.CACHE_INVALIDATION_EVENT, databaseId, tenantId);
            });
    }

    public getIncomingEventEmitter() {
        return this.incomingEventEmitter;
    }

    public getOutgoingEventEmitter() {
        return this.outgoingEventEmitter;
    }

    /**
     * Creates a redis connection based on the given redis client and creates the corresponding
     * database cache object.
     * @param redisClient the redis client to use - note: NRP can be configured to use a standard redis client
     */
    public static createAndSetupClient(redisClient: NRP.NodeRedisPubSub) {
        const redisDbCacheConfig = new RedisDatabaseCacheConfiguration(redisClient);
        redisDbCacheConfig.setup();

        return redisDbCacheConfig;
    }
}
