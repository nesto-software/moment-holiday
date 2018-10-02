import { DateRange } from "moment-range";
import { IDateRangeOptions } from "./date-range-options.interface";
import { Holiday } from "./holiday";
import { HolidayArray } from "./holiday-array";
import { HolidayDefinition } from "./holiday-definition";

/**
 * Resolves given holiday definitions to holiday objects for a given date range.
 */
export interface IHolidayResolver {

    /**
     * Computes all holidays within the given query range.
     * It uses the holiday definitions passed.
     * You can specify whether query range bounds are exclusive or not.
     * They are inclusive by default.
     *
     * @param queryRange the query range which is used to filter the output, expects the range to be snapped to days
     * @param holidayDefinitions the holiday definitions to use for the computation
     * @param excludeStart if true then start day is exclusive, inclusive otherwise
     * @param excludeEnd if true then end day is exclusive, inclusive otherwise
     */
    resolve(
        queryRange: DateRange,
        holidayDefinitions: HolidayDefinition[],
        options?: IDateRangeOptions,
    ): HolidayArray<Holiday>;
}
