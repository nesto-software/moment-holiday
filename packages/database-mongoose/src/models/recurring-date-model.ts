import * as mongoose from "mongoose";
import { datePath } from "../schemas/holiday-definition.schema";
import { IRecurringDateDocument } from "../schemas/interfaces/recurring-date.interface";
import { recurringDateSchema } from "../schemas/recurring-date.schema";

// TODO why does this not work without any cast as described in https://mongoosejs.com/docs/4.x/docs/discriminators.html
// tslint:disable-next-line:variable-name
export const RecurringDateModel: mongoose.Model<IRecurringDateDocument> =
    (datePath as any).discriminator("StandardDate", recurringDateSchema);
