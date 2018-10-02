import { EasterDependentDate } from "@nesto-software/moment-holiday-core";
import { Schema } from "mongoose";
import { dateDiscriminatorKey } from "./abstract-date.schema";

const easterDependentDateSchema = new Schema(
    {
        offset: {
            type: Number,
            required: true,
        },
    },
    {
        discriminatorKey: dateDiscriminatorKey,
        _id: false,
    },
);

easterDependentDateSchema.methods.deserialize = function (): EasterDependentDate {
    return new EasterDependentDate(this.offset);
};

export { easterDependentDateSchema };
