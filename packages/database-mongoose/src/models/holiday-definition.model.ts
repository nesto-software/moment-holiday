import * as mongoose from "mongoose";
import { holidayDefinitionSchema } from "../schemas/holiday-definition.schema";
import { IHolidayDefinitionWithTenantDocument } from "../schemas/interfaces/holiday-definition.interface";

export const createHolidayDefinitionModel =
    // tslint:disable-next-line:max-line-length
    (collectionName: string) => mongoose.model<IHolidayDefinitionWithTenantDocument>(collectionName, holidayDefinitionSchema);
