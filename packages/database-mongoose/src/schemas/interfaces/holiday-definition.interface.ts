import { IHolidayDefinitionInternal } from "@nesto-software/moment-holiday-core";
import { Document } from "mongoose";
import { IDeserializable } from "../../deserializable.interface";
import { IAbstractDate } from "./abstract-date.interface";
import { IAbstractTag } from "./abstract-tag.interface";

export interface IHolidayDefinition {
    name: string;
    //  tenant?: string;    // note: provided by the library
    date: IAbstractDate;
    tags?: IAbstractTag[];
}

// for internal use only
export interface IHolidayDefinitionWithTenant {
    name: string;
    tenant?: string;
    date: IAbstractDate;
    tags?: IAbstractTag[];
}

export interface IHolidayDefinitionDocument extends Document,
    IDeserializable<IHolidayDefinitionInternal>,
    IHolidayDefinition { }

export interface IHolidayDefinitionWithTenantDocument extends Document,
    IDeserializable<IHolidayDefinitionInternal>,
    IHolidayDefinitionWithTenant { }
