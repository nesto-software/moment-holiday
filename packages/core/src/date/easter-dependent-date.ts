import * as moment from "moment";
import { Moment } from "moment";
import { EasterComputationAlgorithm } from "../easter/easter-computation-algorithm";
import { IEasterComputationAlgorithm } from "../easter/easter-computation-algorithm.interface";
import { AbstractDate } from "./abstract-date";

export class EasterDependentDate extends AbstractDate {
    private readonly algorithm: IEasterComputationAlgorithm = new EasterComputationAlgorithm();

    /**
     * Create a new easter dependent date.
     * @param offset number of days before or after easter - positive number means after, negative number before easter
     */
    constructor(private readonly offset: number) {
        super();
    }

    public resolve(year: number): Moment {
        const easterDate = this.algorithm.compute(year);
        const easterMoment = moment({
            day: easterDate.day,
            month: easterDate.month - 1,    // caution! date-easter is not zero based!
            year: easterDate.year,
        });
        easterMoment.add(this.offset, "days");  // the moment setter has side effects

        return easterMoment;
    }
}
