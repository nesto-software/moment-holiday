import * as moment from "moment";
import { Moment } from "moment";
import { AbstractDate } from "@nesto-software/moment-holiday-core";

export class AllHallowsDependentDate extends AbstractDate {

    /**
     * Create a new all hallows day dependent date.
     * @param offset number of days before or after all hallows day - positive number means after, negative number before all hallows day
     */
    constructor(private readonly offset: number) {
        super();
    }

    public resolve(year: number): Moment {
        // Alla helgons dag occurs on the saturday that exists during the period 31 oct - 6 nov
        const oct31 = moment({year: year, month: 9, day: 31});
        let allHallowsDayMoment = oct31;
        if (oct31.isoWeekday() == 7) {
            // October 31 is a sunday, Alla helgons dag can only be on the 6th of nov
            allHallowsDayMoment = moment({year: year, month: 10, day: 6})
        } else if(oct31.isoWeekday() < 6) { // Oct 31 is monday-friday, calculate how many days until saturday
            const day = 6 - oct31.isoWeekday();
            allHallowsDayMoment = moment({year: year, month: 10, day: day});
        }
        allHallowsDayMoment.add(this.offset, "days");  // the moment setter has side effects
        return allHallowsDayMoment;
    }
}
