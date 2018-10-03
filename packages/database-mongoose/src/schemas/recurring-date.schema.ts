import { RecurringDate } from "@nesto-software/moment-holiday-core";
import { Schema } from "mongoose";
import { dateDiscriminatorKey } from "./abstract-date.schema";

const recurringDateSchema = new Schema(
    {
        day: {
            type: Number,
            required: true,
        },
        month: {
            type: Number,
            required: true,
        },
    },
    {
        discriminatorKey: dateDiscriminatorKey,
        _id: false,
    },
);

recurringDateSchema.methods.deserialize = function (): RecurringDate {
    return new RecurringDate(this.day, this.month);
};

export { recurringDateSchema };
