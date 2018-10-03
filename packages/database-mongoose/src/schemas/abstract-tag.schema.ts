import { AbstractTag } from "@nesto-software/moment-holiday-core/dist";
import { Schema } from "mongoose";

const tagsDiscriminatorKey = "kind";
const abstractTagSchema = new Schema(
    {},
    {
        discriminatorKey: tagsDiscriminatorKey,
        _id: false,
    },
);

abstractTagSchema.methods.deserialize = (): AbstractTag => {
    throw new Error("Cannot deserialize an abstract class.");
};

export { abstractTagSchema, tagsDiscriminatorKey };
