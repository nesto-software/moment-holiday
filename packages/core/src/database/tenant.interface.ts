/**
 * This interface represents a tenant for the database.
 * The api can return different holiday definitions from database.
 * The database query searches for holiday definitions which belong to a given tenant.
 */
export interface ITenant {
    /**
     * A string which is used to identify tenants in the database.
     * The returned value must be globally unique.
     */
    getIdentifier(): string;
}
