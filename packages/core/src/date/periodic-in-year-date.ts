import { Moment } from "moment";
import { AbstractDate } from "./abstract-date";

/**
 * Creates a date which might resolve multiple times per year.
 */
export class PeriodicInYearDate extends AbstractDate {
    /**
     * Create a new periodic date.
     * This date type is used for complex recurrences.
     * Standard recurrences which resolve max. 1 time per year should be modeled with {@link RecurringDate} instead.
     */
    private constructor(private readonly resolverFn: (year: number) => Moment | Moment[] | null) {
        super();
    }

    public static withResolver(resolverFn: (year: number) => Moment | Moment[] | null) {
        return new PeriodicInYearDate(resolverFn);
    }

    // TODO: fromString factory method (see: )

    public resolve(year: number) {
        return this.resolverFn(year);
    }
}
