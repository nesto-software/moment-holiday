import { AbstractDate, AbstractTag, IHolidayDefinitionInternal } from "@nesto-software/moment-holiday-core";
import { Schema } from "mongoose";
import { IDeserializable } from "../deserializable.interface";
import { abstractDateSchema } from "./abstract-date.schema";
import { abstractTagSchema } from "./abstract-tag.schema";

const holidayDefinitionSchema = new Schema({
    name: String,
    tenant: String,
    date: {
        type: abstractDateSchema,
        required: true,
    },
    tags: {
        type: [abstractTagSchema],
        required: false,
    },
});

holidayDefinitionSchema.index({
    name: 1,
    tenant: 1,
},
    {
        unique: true,
    },
);

holidayDefinitionSchema.methods.deserialize = function (): IHolidayDefinitionInternal {
    let tags = this.tags;

    if (tags) {
        tags = (this.tags as Array<IDeserializable<AbstractTag>>).map((tag) => tag.deserialize());
    }

    return {
        name: this.name as string,
        date: this.date.deserialize() as AbstractDate,
        tags,
    };
};

const datePath = holidayDefinitionSchema.path("date");
const tagsPath = holidayDefinitionSchema.path("tags");

export { holidayDefinitionSchema, datePath, tagsPath };
