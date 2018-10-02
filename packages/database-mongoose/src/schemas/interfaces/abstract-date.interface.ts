import { AbstractDate } from "@nesto-software/moment-holiday-core";
import { Document } from "mongoose";
import { IDeserializable } from "../../deserializable.interface";

// tslint:disable-next-line:no-empty-interface
export interface IAbstractDate { }
export interface IAbstractDateDocument extends Document, IDeserializable<AbstractDate>, IAbstractDate { }
