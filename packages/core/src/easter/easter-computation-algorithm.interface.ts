import { EasterDate } from "date-easter";

export interface IEasterComputationAlgorithm {
    compute(year: number): EasterDate;
}
