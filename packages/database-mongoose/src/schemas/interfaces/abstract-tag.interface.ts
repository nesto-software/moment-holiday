import { AbstractTag } from "@nesto-software/moment-holiday-core/dist";
import { Document } from "mongoose";
import { IDeserializable } from "../../deserializable.interface";

// tslint:disable-next-line:no-empty-interface
export interface IAbstractTag { }
export interface IAbstractTagDocument extends Document, IDeserializable<AbstractTag>, IAbstractTag { }
