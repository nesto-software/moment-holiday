import { ITenant } from "./tenant.interface";

export class StandardTenant implements ITenant {
    constructor(private readonly tenantId: string) { }

    public getIdentifier(): string {
        return this.tenantId;
    }
}
