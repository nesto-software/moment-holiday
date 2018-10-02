import { IDatabaseCacheConfiguration } from "./database-cache-configuration.interface";

/**
 * This is a database cache configuration for distributed applications.
 * The cache is cleaned after a specified number of milliseconds.
 * The cluster of distributed applications reaches consistency after the given number of milliseconds.
 */
export class TimebasedDatabaseCacheConfiguration implements IDatabaseCacheConfiguration {
    /**
     * Creates a time-based database cache configuration.
     * @param maxAgeInMs the number of milliseconds after which the cache is cleaned
     */
    constructor(private readonly _maxAgeInMs?: number) { }

    public unregister() {
        // do nothing
    }

    get maxAgeInMs() {
        return this._maxAgeInMs;
    }
}
