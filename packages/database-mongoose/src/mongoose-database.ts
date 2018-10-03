/* make sure to import the models which use discriminators */
import { EasterDependentDateModel } from "./models/easter-dependent-date.model";
import { RecurringDateModel } from "./models/recurring-date-model";

import {
    AbstractDatabase,
    IDatabaseCacheConfiguration,
    IHolidayDefinitionInternal,
    ITenant,
} from "@nesto-software/moment-holiday-core";
import { Model } from "mongoose";
import { createHolidayDefinitionModel } from "./models/holiday-definition.model";
import {
    IHolidayDefinition,
    IHolidayDefinitionWithTenantDocument,
} from "./schemas/interfaces/holiday-definition.interface";

/**
 * The mongoose database module for moment-holiday.
 * Please note that you must setup mongoose globally before using this class.
 */
export class MongooseDatabase extends AbstractDatabase<IHolidayDefinition> {
    // tslint:disable-next-line:variable-name
    private readonly HolidayDefinitionModel: Model<IHolidayDefinitionWithTenantDocument>;

    /**
     * Creates a new instance of the mongoose database plugin.
     * IMPORTANT: Set up mongoose globally before initializing this class.
     * @param databaseId the identifier for this datbase object - there must be only one database object with this id
     */
    constructor(databaseId: string, collectionName: string, databaseCacheConfiguration?: IDatabaseCacheConfiguration) {
        super(databaseId, databaseCacheConfiguration);

        this.HolidayDefinitionModel = createHolidayDefinitionModel(collectionName);
    }

    private addTenant(
        holidayDefinitionDoc: IHolidayDefinitionWithTenantDocument,
        tenant?: ITenant,
    ): IHolidayDefinitionWithTenantDocument {

        if (tenant) {
            holidayDefinitionDoc.tenant = tenant.getIdentifier();
        }

        return holidayDefinitionDoc;
    }

    protected async getHolidayDefinitionsInternal(tenant?: ITenant): Promise<IHolidayDefinitionInternal[]> {
        const results = await this.HolidayDefinitionModel.find({
            tenant: (tenant) ? tenant.getIdentifier() : undefined,
        });

        return results.map((result) => result.deserialize());
    }

    protected async addHolidayDefinitionInternal(holidayDefinition: IHolidayDefinition, tenant?: ITenant) {
        const document = new this.HolidayDefinitionModel(holidayDefinition);
        const documentWithTenant = this.addTenant(document, tenant);

        await documentWithTenant.save();
    }

    protected async updateHolidayDefinitionInternal(holidayDefinition: IHolidayDefinition,
        tenant?: ITenant) {
        const document = new this.HolidayDefinitionModel(holidayDefinition);
        const documentWithTenant = this.addTenant(document, tenant);

        await this.HolidayDefinitionModel.findOneAndUpdate({
            name: documentWithTenant.name,
            tenant: documentWithTenant.tenant,
        }, documentWithTenant);
    }

    protected async deleteHolidayDefinitionInternal(holidayNameToDelete: string, tenant?: ITenant) {
        await this.HolidayDefinitionModel.deleteOne({
            name: holidayNameToDelete,
            tenant: (tenant) ? tenant.getIdentifier() : undefined,
        });
    }
}
