import * as mongoose from "mongoose";
import { easterDependentDateSchema } from "../schemas/easter-dependent-date.schema";
import { datePath } from "../schemas/holiday-definition.schema";
import { IEasterDependentDateDocument } from "../schemas/interfaces/easter-dependent-date.interface";

// TODO why does this not work without any cast as described in https://mongoosejs.com/docs/4.x/docs/discriminators.html
// tslint:disable-next-line:variable-name
export const EasterDependentDateModel: mongoose.Model<IEasterDependentDateDocument> =
    (datePath as any).discriminator("EasterDependentDate", easterDependentDateSchema);
