import { AbstractDatabase } from "./abstract-database";
import { ITenant } from "./tenant.interface";

/**
 * This is a database configuration object.
 * An api client uses an instance to specify that the core should load additional
 * holiday definitions from a database.
 * @param _database the database engine to use - this class comes from a dedicated database plugin for moment holiday
 * @param _databaseCacheConfiguration the cache configuration for distributed applications which scale horizontally
 * @param _tenant the tenant is used to distinguish between different sets of holiday definitions in the database
 */
export class DatabaseConfiguration<U, T extends AbstractDatabase<U>> {
    constructor(private readonly _database: T,
        private readonly _tenant?: ITenant) {
    }

    get tenant() {
        return this._tenant;
    }

    get database() {
        return this._database;
    }
}
