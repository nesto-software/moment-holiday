import { IAbstractDateDocument } from "./abstract-date.interface";

export interface IEasterDependentDate {
    offset: number;
}

export interface IEasterDependentDateDocument extends IAbstractDateDocument, IEasterDependentDate { }
