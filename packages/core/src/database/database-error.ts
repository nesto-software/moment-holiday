export class DatabaseError extends Error {
    constructor(private readonly cause: Error) {
        super("The database plugin failed to execute the operation.");

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }

    public getCause(): Error {
        return this.cause;
    }
}
