import { IDatabaseCacheConfiguration } from "./database-cache-configuration.interface";

export class DisabledDatabaseCacheConfiguration implements IDatabaseCacheConfiguration {
    public unregister() {
        // do nothing
    }
}
