import mem = require("mem");
import { DateRange } from "moment-range";
import LRUCache = require("quick-lru");
import { IDateRangeOptions } from "./date-range-options.interface";
import { Holiday } from "./holiday";
import { HolidayArray } from "./holiday-array";
import { HolidayDefinition } from "./holiday-definition";
import { IHolidayResolver } from "./holiday-resolver.interface";

export class HolidayResolver implements IHolidayResolver {
    private static readonly lruCache = new LRUCache(
        {
            maxSize: 10000,
        },
    );

    private readonly _memComputeHolidaysForYear = mem(this.computeHolidaysForYear, {
        cache: HolidayResolver.lruCache,
    });

    public resolve(
        queryRange: DateRange,
        holidayDefinitions: HolidayDefinition[],
        options?: IDateRangeOptions,
    ): HolidayArray<Holiday> {

        const years = this.computeYearsFor(queryRange);
        const holidays: HolidayArray<Holiday> = new HolidayArray<Holiday>();

        for (const year of years) {
            const holidaysForYear = this._memComputeHolidaysForYear(holidayDefinitions, year);
            const filteredHolidays = this.filterByQueryRange(holidaysForYear, queryRange, options);

            holidays.push(...filteredHolidays);
        }

        return holidays;
    }

    private computeHolidaysForYear(
        holidayDefinitions: HolidayDefinition[],
        year: number,
    ) {
        const holidays: HolidayArray<Holiday> = new HolidayArray<Holiday>();

        for (const definition of holidayDefinitions) {
            const resolvedMomentOrMoments = definition.date.resolve(year);
            if (resolvedMomentOrMoments !== null) {
                if (resolvedMomentOrMoments instanceof Array) {
                    for (const resolvedMoment of resolvedMomentOrMoments) {
                        const holiday = new Holiday(resolvedMoment, definition);
                        holidays.push(holiday);
                    }
                } else {
                    const holiday = new Holiday(resolvedMomentOrMoments, definition);
                    holidays.push(holiday);
                }
            }
        }

        return holidays;
    }

    private filterByQueryRange(
        holidays: HolidayArray<Holiday>,
        queryRange: DateRange,
        options?: IDateRangeOptions,
    ) {

        if (options && options.excludeStart) {
            queryRange.start.add(1, "day");
        }

        if (options && options.excludeEnd) {
            queryRange.end.subtract(1, "day");
        }

        // note: we always use the inclusive contains check
        return holidays.filter((holiday) => (queryRange.contains(holiday.moment)));
    }

    private computeYearsFor(queryRange: DateRange) {
        return Array.from(queryRange.snapTo("year").by("year")).map((m) => m.year());
    }
}
