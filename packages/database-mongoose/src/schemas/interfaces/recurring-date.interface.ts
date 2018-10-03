import { IAbstractDateDocument } from "./abstract-date.interface";

export interface IRecurringDate {
    day: number;
    month: number;
}

export interface IRecurringDateDocument extends IAbstractDateDocument, IRecurringDate { }
