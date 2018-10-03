import { Holiday } from "./holiday";
import { CountryTag } from "./tag/country-tag";

/**
 * This is an array implementation which ships special sort
 * functions for holiday containments.
 */
export class HolidayArray<T extends Holiday> extends Array<T> {
    /**
     * Returns an array which is sorted so that the earliest dates
     * come first.
     */
    public sortHolidaysAscending(): HolidayArray<Holiday> {
        return this.sort((a: T, b: T) => {
            if (a.moment.isAfter(b.moment)) {
                return 1;
            } else if (a.moment.isBefore(b.moment)) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    /**
     * Returns an array which is sorted so that the latest dates
     * come first.
     */
    public sortHolidaysDescending(): HolidayArray<Holiday> {
        return this.sort((a: T, b: T) => {
            if (a.moment.isAfter(b.moment)) {
                return -1;
            } else if (a.moment.isBefore(b.moment)) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    /**
     * An alias for filter with correct typings.
     * @param predicate the predicate to test against
     */
    public filterHolidays(predicate: (holiday: Holiday) => boolean): HolidayArray<T> {
        const newArray = new HolidayArray<T>();

        this.forEach((element) => {
            if (predicate(element)) {
                newArray.push(element);
            }
        });

        return newArray;
    }

    /**
     * Removes all country holidays from the array.
     */
    public withoutCountryHolidays(): HolidayArray<T> {
        return this.filterHolidays((holiday) => {
            return !holiday.isTagged(CountryTag);
        });
    }
}
