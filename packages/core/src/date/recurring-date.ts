import * as moment from "moment";
import { AbstractDate } from "./abstract-date";

/**
 * A recurring date is basically a date which is relative to the start of a given year.
 * It is used for holidays which happen repeatedly at the same month and day in a year.
 */
export class RecurringDate extends AbstractDate {
    /**
     * Create a new standard date.
     * @param day the day in the given month - 1-31
     * @param month the month - 0-11 (zero based!!)
     */
    constructor(private readonly day: number, private readonly month: number) {
        super();
    }

    public resolve(year: number) {
        return moment({
            day: this.day,
            month: this.month,
            year,
        });
    }
}
