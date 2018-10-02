import * as mongoose from "mongoose";
import { abstractDateSchema } from "../schemas/abstract-date.schema";
import { IAbstractTagDocument } from "../schemas/interfaces/abstract-tag.interface";

// tslint:disable-next-line:variable-name
export const AbstractTagModel =
    mongoose.model<IAbstractTagDocument>("AbstractTag", abstractDateSchema);
