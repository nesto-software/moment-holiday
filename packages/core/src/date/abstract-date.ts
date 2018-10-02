import { Moment } from "moment";

export abstract class AbstractDate {
    /**
     * Computes the moment timestamp for the date.
     * The moment must have its day, month and year set.
     * The implementation expects the other moment values to be 0.
     *
     * @param year the year this date is placed in
     * @returns a moment containing day, month and year attributes which are set for the specific year
     */
    public abstract resolve(year: number): Moment[] | Moment | null;
}
