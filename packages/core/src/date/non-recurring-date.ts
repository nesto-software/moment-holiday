import * as moment from "moment";
import { AbstractDate } from "./abstract-date";

/**
 * Creates a date which resolves in some years only.
 * This can be used to create a holiday in a single year only.
 */
export class NonRecurringDate extends AbstractDate {
    /**
     * Create a new unrepeatable date.
     * @param day the day in the given month - 1-31
     * @param month the month - 0-11 (zero based!!)
     * @param yearPredicate a function which returns for a given year if the date resolves
     */
    private constructor(private readonly day: number,
        private readonly month: number,
        private readonly yearPredicate?: (year: number) => boolean,
        private readonly years?: number[]) {

        super();
    }

    public static forPredicate(day: number, month: number, yearPredicate: (year: number) => boolean) {
        return new NonRecurringDate(day, month, yearPredicate);
    }

    public static forYears(day: number, month: number, years: number[]) {
        return new NonRecurringDate(day, month, undefined, years);
    }

    public resolve(year: number) {
        let isValidYear = false;

        if (this.yearPredicate) {
            isValidYear = this.yearPredicate(year);
        } else if (this.years) {
            isValidYear = this.years.find((validYear) => validYear === year) !== undefined;
        }

        if (isValidYear) {
            return moment({
                day: this.day,
                month: this.month,
                year,
            });
        } else {
            return null;
        }
    }
}
