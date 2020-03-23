import * as moment from "moment";
import { Moment } from "moment";
import { AbstractDate } from "@nesto-software/moment-holiday-core";

export class MidsummerDependentDate extends AbstractDate {

    /**
     * Create a new midsummer dependent date.
     * @param offset number of days before or after midsummer day - positive number means after, negative number before midsummer day
     */
    constructor(private readonly offset: number) {
        super();
    }

    public resolve(year: number): Moment {
        // Midsommardagen occurs on the saturday that exists during the period 20 - 26 june
        const jun20 = moment({year: year, month: 5, day: 20});
        let midsummerMoment = jun20;
        if (jun20.isoWeekday() == 7) {
            // June 20 is a sunday, Midsommardagen can only be on the 26th of june
            midsummerMoment = moment({year: year, month: 5, day: 26})
        } else if(jun20.isoWeekday() < 6) {
            // June 20 is monday-friday, calculate how many days until saturday
            const day = 20 + (6 - jun20.isoWeekday());
            midsummerMoment = moment({year: year, month: 5, day: day});
        }
        midsummerMoment.add(this.offset, "days");  // the moment setter has side effects
        return midsummerMoment;
    }
}
