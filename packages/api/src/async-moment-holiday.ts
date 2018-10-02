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
const momentRange = extendMoment(momentNamespace);

export class AsyncMomentHoliday extends AbstractMomentHoliday {

    constructor(country: CountryIdentifier,
        protected readonly administrativeUnits: Array<StateIdentifier | RegionIdentifier | "ALL">,
        dbConfig?: DatabaseConfiguration<any, any>) {

        super(country, administrativeUnits, dbConfig);
    }

    public async getHolidayDefinitions(): Promise<HolidayDefinition[]> {
        return this.getHolidayDefinitionFactory().getDefinitionsWithDatabase(this.getDbConfig(),
            ...this.administrativeUnits);
    }

    public async isHoliday(
        momentToTest: Moment,
        predicate?: (holiday: Holiday) => boolean,
    ): Promise<boolean> {

        const queryRange = momentRange.range(momentToTest, momentToTest);
        let holidays = await this.for(queryRange);

        if (predicate) {
            holidays = holidays.filterHolidays(predicate);
        }

        return holidays.length > 0;
    }

    public async between(
        start: Moment,
        end: Moment,
        options?: IDateRangeOptions,
    ): Promise<HolidayArray<Holiday>> {

        const range = momentRange.range(start, end);
        return this.for(range, options);
    }

    public async for(
        queryRange: DateRange,
        options?: IDateRangeOptions,
    ): Promise<HolidayArray<Holiday>> {
        const definitions = await this.getHolidayDefinitions();
        const holidays = this.computeHolidays(
            queryRange,
            definitions,
            options,
        );

        return holidays;
    }

    public async inYear(year: number): Promise<HolidayArray<Holiday>> {
        const start = moment({
            year,
        }).startOf("year");

        const queryRange = momentRange.range(start, start).snapTo("year");

        return await this.for(queryRange);
    }

    public async inMonth(month: number, year: number): Promise<HolidayArray<Holiday>> {
        const start = moment({
            month,
            year,
        }).startOf("month");

        const queryRange = momentRange.range(start, start).snapTo("month");

        return await this.for(queryRange);
    }

    public async in(year: number, month?: number): Promise<HolidayArray<Holiday>> {
        if (!month) {
            return await this.inYear(year);
        } else {
            return await this.inMonth(month, year);
        }
    }

    public async nextHoliday(
        momentToStart: Moment,
        predicate?: (holiday: Holiday) => boolean,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Promise<Holiday | null> {

        let queryRangeStart = moment(momentToStart);
        const definitions = await this.getHolidayDefinitions();
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
                    excludeEnd: false,
                },
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

    public async previousHoliday(
        momentToStart: Moment,
        predicate?: (holiday: Holiday) => boolean,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Promise<Holiday | null> {

        let queryRangeStart = moment(momentToStart);
        const definitions = await this.getHolidayDefinitions();
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
                    excludeStart: false,
                    excludeEnd: currentDayExclusive,
                },
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

    public async nextHolidayWithName(
        momentToStart: Moment,
        holidayName: string,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Promise<Holiday | null> {

        let queryRangeStart = moment(momentToStart);
        const definitions = await this.getHolidayDefinitions();
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

    public async previousHolidayWithName(
        momentToStart: Moment,
        holidayName: string,
        isCurrentDayInclusive?: boolean,
        maxSearchYears: number = 2000,
    ): Promise<Holiday | null> {

        let queryRangeStart = moment(momentToStart);
        const definitions = await this.getHolidayDefinitions();
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
