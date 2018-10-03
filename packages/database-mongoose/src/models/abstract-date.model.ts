import * as mongoose from "mongoose";
import { abstractDateSchema } from "../schemas/abstract-date.schema";
import { IAbstractDateDocument } from "../schemas/interfaces/abstract-date.interface";

// tslint:disable-next-line:variable-name
export const AbstractDateModel =
    mongoose.model<IAbstractDateDocument>("AbstractDate", abstractDateSchema);
