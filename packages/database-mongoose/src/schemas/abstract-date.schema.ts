import { AbstractDate } from "@nesto-software/moment-holiday-core";
import { Schema } from "mongoose";

const dateDiscriminatorKey = "kind";
const abstractDateSchema = new Schema(
    {},
    {
        discriminatorKey: dateDiscriminatorKey,
        _id: false,
    },
);

abstractDateSchema.methods.deserialize = (): AbstractDate => {
    throw new Error("Cannot deserialize an abstract class.");
};

export { abstractDateSchema, dateDiscriminatorKey };
