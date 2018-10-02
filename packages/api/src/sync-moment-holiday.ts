import {
    DatabaseConfiguration,
    Holiday,
    HolidayArray,
    HolidayDefinition,
    IDateRangeOptions,
} from "@nesto-software/moment-holiday-core";
import { Moment } from "moment";
import * as momentNamespace from "moment";
import * as moment from "moment";
import { DateRange, extendMoment } from "moment-range";
import { AbstractMomentHoliday, CountryIdentifier, RegionIdentifier, StateIdentifier } from "./abstract-moment-holiday";
import { AsyncMomentHoliday } from "./async-moment-holiday";
import { HolidayDefinitionFactoryRegistry } from "./holiday-definition-factory-registry";
const momentRange = extendMoment(momentNamespace);

export class SyncMomentHoliday extends AbstractMomentHoliday {

    constructor(
        private readonly country: CountryIdentifier,
        administrativeUnits: Array<StateIdentifier | RegionIdentifier | "ALL">,
        registry?: HolidayDefinitionFactoryRegistry,
    ) {

        super(country, administrativeUnits, undefined, registry);

    }

    public withDatabase(dbConfig: DatabaseConfiguration<any, any>) {
        return new AsyncMomentHoliday(this.country, this.administrativeUnits, dbConfig);
    }

    public getHolidayDefinitions(): HolidayDefinition[] {
        return this.getHolidayDefinitionFactory().getDefinitions(...this.administrativeUnits);
    }

    public isHoliday(momentToTest: Moment, predicate?: (holiday: Holiday) => boolean): boolean {

        // note: moment range copies the momentToTest
        const queryRange = momentRange.range(momentToTest, momentToTest);
        let holidays = this.for(queryRange);

        if (predicate) {
            holidays = holidays.filterHolidays(predicate);
        }

        return holidays.length > 0;

    }

    public between(
        start: Moment,
        end: Moment,
        options?: IDateRangeOptions,
    ): HolidayArray<Holiday> {

        // note: moment range copies the start end end
        const range = momentRange.range(start, end);
        return this.for(range, options);
    }

    public for(
        queryRange: DateRange,
        options?: IDateRangeOptions,
    ): HolidayArray<Holiday> {

        const definitions = this.getHolidayDefinitions();
        const holidays = this.computeHolidays(
            queryRange,
            definitions,
            options,
        );

        return holidays;
    }

    public inYear(year: number): HolidayArray<Holiday> {
        const start = moment({
            year,
        }).startOf("year");

        // note: moment range copies the momentToTest
        const queryRange = momentRange.range(start, start).snapTo("year");

        return this.for(queryRange);
    }

    public inMonth(month: number, year: number): HolidayArray<Holiday> {
        const start = moment({
            month,
            year,
        }).startOf("month");

        // note: moment range copies the momentToTest
        const queryRange = momentRange.range(start, start).snapTo("month");

        return this.for(queryRange);
    }

    public in(year: number, month?: number): HolidayArray<Holiday> {
        if (!month) {
            return this.inYear(year);
        } else {
            return this.inMonth(month, year);
        }
    }

    public nextHoliday(
        momentToStart: Moment,
        predicate?: (holiday: Holiday) => boolean,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Holiday | null {

        let queryRangeStart = moment(momentToStart);
        const definitions = this.getHolidayDefinitions();
        let holidaysAsc = null;
        let yearsQueried = 0;
        let currentDayExclusive = isCurrentDayInclusive ? false : true;

        // guard to prevent from infinite loop
        // TODO: there is a special case where definitions only contain UnrepeatableDates
        // we could write a test case for this which tests the dependencies
        if (definitions.length === 0) {
            throw new Error("No definitions given. Would loop infinitely.");
        }

        do {
            const queryRange = momentRange.range(queryRangeStart, moment(queryRangeStart).endOf("year"));
            holidaysAsc = this.computeHolidays(
                queryRange,
                definitions,
                {
                    excludeStart: currentDayExclusive,
                } as IDateRangeOptions,
            ).sortHolidaysAscending();

            if (predicate) {
                holidaysAsc = holidaysAsc.filterHolidays(predicate);
            }

            // prepare the next iteration
            queryRangeStart = queryRangeStart.add(1, "year").startOf("year");
            yearsQueried++;
            // we must query the start of the range for subsequent years
            currentDayExclusive = false;

            // guard to prevent from infinite loop
            if (yearsQueried >= maxSearchYears) {
                return null;
            }
        } while (holidaysAsc.length === 0);

        return holidaysAsc[0];
    }

    public previousHoliday(
        momentToStart: Moment,
        predicate?: (holiday: Holiday) => boolean,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Holiday | null {

        let queryRangeStart = moment(momentToStart);
        const definitions = this.getHolidayDefinitions();
        let holidaysDesc = null;
        let yearsQueried = 0;
        let currentDayExclusive = isCurrentDayInclusive ? false : true;

        // guard to prevent from infinite loop
        // TODO: there is a special case where definitions only contain UnrepeatableDates
        if (definitions.length === 0) {
            throw new Error("No definitions given. Would loop infinitely.");
        }

        do {
            const queryRange = momentRange.range(moment(queryRangeStart).startOf("year"), queryRangeStart);
            holidaysDesc = this.computeHolidays(
                queryRange,
                definitions,
                {
                    excludeEnd: currentDayExclusive,
                    excludeStart: false,
                } as IDateRangeOptions,
            ).sortHolidaysDescending();

            if (predicate) {
                holidaysDesc = holidaysDesc.filterHolidays(predicate);
            }

            // prepare the next iteration
            queryRangeStart = queryRangeStart.subtract(1, "year").endOf("year");
            yearsQueried++;
            // we must query the end of the range for subsequent years
            currentDayExclusive = false;

            // guard to prevent from infinite loop
            if (yearsQueried >= maxSearchYears) {
                return null;
            }
        } while (holidaysDesc.length === 0);

        return holidaysDesc[0];
    }

    public nextHolidayWithName(
        momentToStart: Moment,
        holidayName: string,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Holiday | null {

        let queryRangeStart = moment(momentToStart);
        const definitions = this.getHolidayDefinitions();
        let holidaysDesc = null;
        let yearsQueried = 0;
        let currentDayExclusive = isCurrentDayInclusive ? false : true;

        do {
            const queryRange = momentRange.range(queryRangeStart, moment(queryRangeStart).endOf("year"));

            holidaysDesc = this.computeHolidays(
                queryRange,
                definitions,
                {
                    excludeStart: currentDayExclusive,
                    excludeEnd: false,
                },
            ).sortHolidaysDescending();

            holidaysDesc = holidaysDesc.filter((holiday) => holiday.name === holidayName);

            // prepare the next iteration
            queryRangeStart = queryRangeStart.add(1, "year").startOf("year");
            yearsQueried++;
            // we must query the start of the range for subsequent years
            currentDayExclusive = false;

        } while (holidaysDesc.length === 0 && (yearsQueried < maxSearchYears));

        const result = (holidaysDesc.length > 0) ? holidaysDesc[0] : null;

        return result;
    }

    public previousHolidayWithName(
        momentToStart: Moment,
        holidayName: string,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Holiday | null {

        let queryRangeStart = moment(momentToStart);
        const definitions = this.getHolidayDefinitions();
        let holidaysDesc = null;
        let yearsQueried = 0;
        let currentDayExclusive = isCurrentDayInclusive ? false : true;

        do {
            const queryRange = momentRange.range(moment(queryRangeStart).startOf("year"), queryRangeStart);

            holidaysDesc = this.computeHolidays(
                queryRange,
                definitions,
                {
                    excludeStart: false,
                    excludeEnd: currentDayExclusive,
                },
            ).sortHolidaysDescending();

            holidaysDesc = holidaysDesc.filter((holiday) => holiday.name === holidayName);

            // prepare the next iteration
            queryRangeStart = queryRangeStart.subtract(1, "year").endOf("year");
            yearsQueried++;
            // we must query the end of the range for subsequent years
            currentDayExclusive = false;

        } while (holidaysDesc.length === 0 && (yearsQueried < maxSearchYears));

        const result = (holidaysDesc.length > 0) ? holidaysDesc[0] : null;

        return result;
    }
}
