import {
    AustrianCountryAbbrevition,
    AustrianCountryName,
} from "@nesto-software/moment-holiday-austria";

import {
    SwedishCountryAbbrevition,
    SwedishCountryName,
} from "@nesto-software/moment-holiday-sweden";

import { Moment } from "moment";

import {
    AbstractHolidayDefinitionFactory,
    DatabaseConfiguration,
    Holiday,
    HolidayArray,
    HolidayDefinition,
    HolidayResolver,
    IDateRangeOptions,
    IHolidayResolver,
    Region,
    State,
} from "@nesto-software/moment-holiday-core";

import {
    GermanCountryAbbrevition,
    GermanCountryName,
    GermanRegionAbbreviation,
    GermanStateAbbreviation,
} from "@nesto-software/moment-holiday-germany";

import { HolidayDefinitionFactoryRegistry } from "./holiday-definition-factory-registry";

import { DateRange } from "moment-range";

/**
 * A moment-holiday configuration object.
 * Holds the information which holidays should be considered (i.e. the locale).
 */
export abstract class AbstractMomentHoliday {
    private readonly holidayResolver: IHolidayResolver = new HolidayResolver();
    private readonly holidayDefinitionFactory: AbstractHolidayDefinitionFactory;

    constructor(
        country: CountryIdentifier,
        protected readonly administrativeUnits: Array<StateIdentifier | RegionIdentifier | "ALL">,
        private readonly dbConfig?: DatabaseConfiguration<any, any>,
        registry?: HolidayDefinitionFactoryRegistry,
    ) {

        if (!registry) {
            registry = HolidayDefinitionFactoryRegistry.getInstance();
        }

        this.holidayDefinitionFactory = registry.getFactoryByCountryIdentifier(country);

    }

    protected getDbConfig() {
        return this.dbConfig;
    }

    protected getHolidayDefinitionFactory() {
        return this.holidayDefinitionFactory;
    }

    protected computeHolidays(
        queryRange: DateRange,
        holidayDefinitions: HolidayDefinition[],
        options?: IDateRangeOptions,
    ) {

        // in order to streamline consecutive computations we snap the days
        const modifiedQueryRange = queryRange.snapTo("day");

        return this.holidayResolver.resolve(
            modifiedQueryRange,
            holidayDefinitions,
            options,
        );
    }

    /**
     * Returns the holiday definitions which are used to compute the actual holidays for a specific date range.
     * @returns the holiday definitions
     */
    public abstract getHolidayDefinitions(): HolidayDefinition[] | Promise<HolidayDefinition[]>;

    /**
     * Returns whether the given moment is a holiday.
     * Please note that the api return all holidays - including non-public!
     * You must use the predicate parameter to  in order to select specific types of holiday.
     *
     * @param momentToTest the moment to test
     * @param predicate the predicate to test the holidy against (if any is found)
     * @returns true if the given moment belongs to a holidays
     */
    public abstract isHoliday(
        momentToTest: Moment,
        predicate?: (holiday: Holiday) => boolean,
    ): Promise<boolean> | boolean;

    /**
     * Returns all holidays between the given moments.
     * @param start the start date (inclusive by default)
     * @param end the end date (inclusive by default)
     * @param options an object which configures how start and end are interpreted
     * @returns an array of holidays between start and end date
     */
    public abstract between(
        start: Moment,
        end: Moment,
        options?: IDateRangeOptions,
    ): Promise<HolidayArray<Holiday>> | HolidayArray<Holiday>;

    /**
     * Returns all holidays in the given range.
     * By default the days at the edge of the range are inclusive.
     * @param queryRange the range to query
     * @param options an object which configures how start and end of the range are interpreted
     * @returns all holidays within the given range
     */
    public abstract for(
        queryRange: DateRange,
        options?: IDateRangeOptions,
    ): Promise<HolidayArray<Holiday>> | HolidayArray<Holiday>;

    /**
     * Returns all holidays for the given year.
     * @param year the year for the lookup
     * @returns all holidays within the given year
     */
    public abstract inYear(year: number): Promise<HolidayArray<Holiday>> | HolidayArray<Holiday>;

    /**
     * Returns all holidays for the given month
     * @param month the month in the given year - zero based
     * @param year the year
     * @returns all holidays within the given year and the given month
     */
    public abstract inMonth(month: number, year: number): Promise<HolidayArray<Holiday>> | HolidayArray<Holiday>;

    /**
     * Returns all holidays in the given year (and month if given).
     * This is a convenience method for inMonth(number, number) and inYear(number).
     *
     * @param year the year to compute holidays for
     * @param month optional: only return holidays in the given month - zero based
     * @returns all holidays in given year (and month)
     */
    public abstract in(year: number, month?: number): Promise<HolidayArray<Holiday>> | HolidayArray<Holiday>;

    /**
     * Returns the upcoming holiday for the given moment.
     * Please note: This method could theoretically end up searching infinitely.
     * If you use a predicate: please make sure that you specify a predicate which returns true for any holiday.
     *
     * We implemented a gurard to prevent an infinite loop:
     * This methods ends its search after scanning 2000 years.
     *
     * @param momentToStart the moment for which to retrieve the following holiday
     * @param predicate the predicate to test the holidy against (if any is found)
     * @param isCurrentDayInclusive if true then the current day is examined, otherwise it is not
     * @param maxSearchYears the max. number of years to search (min=1)
     * @returns the holiday which is following the given moment or null if none found
     */
    public abstract nextHoliday(
        momentToStart: Moment,
        predicate?: (holiday: Holiday) => boolean,
        isCurrentDayInclusive?: boolean,
        maxSearchYears?: number,
    ): Promise<Holiday | null> | Holiday | null;

    /**
     * Returns the upcoming holiday for the given moment.
     * Please note: This method could theoretically end up searching infinitely.
     * If you use a predicate: please make sure that you specify a predicate which returns true for any holiday.
     *
     * We implemented a gurard to prevent an infinite loop:
     * This methods ends its search after scanning 2000 years.
     *
     * @param momentToStart the moment for which to retrieve the preceding holiday
     * @param predicate the predicate to test the holidy against (if any is found)
     * @param isCurrentDayInclusive if true then the current day is examined, otherwise it is not
     * @param maxSearchYears the max. number of years to search (min=1)
     * @returns the holiday which is preceding the given moment or null if none found
     */
    public abstract previousHoliday(
        momentToStart: Moment,
        predicate?: (holiday: Holiday) => boolean,
        isCurrentDayInclusive?: boolean,
        maxSearchYears?: number,
    ): Promise<Holiday | null> | Holiday | null;

    /**
     * Returns the upcoming holiday with the given name.
     * The search is capped at 2000 years by default - you can overwrite this setting via maxSearchYears.
     * This is a guard to prevent an infinite search.
     *
     * @param momentToStart the moment for which to retrieve the next holiday with given name
     * @param holidayName the name of the holiday to search for
     * @param isCurrentDayInclusive if true then the current day is examined, otherwise it is not
     * @param maxSearchYears the max. number of years to search (min=1) - applies for holidays which appear once a while
     * @returns the holiday which is following the given moment and has the given name or null if none found
     */
    public abstract nextHolidayWithName(momentToStart: Moment,
        holidayName: string,
        isCurrentDayInclusive?: boolean,
        maxSearchYears?: number,
    ): Promise<Holiday | null> | Holiday | null;

    /**
     * Returns the preceding holiday with the given name.
     * The search is capped at 2000 years by default - you can overwrite this setting via maxSearchYears.
     * This is a guard to prevent an infinite search.
     *
     * @param momentToStart the moment for which to retrieve the preceding holiday with given name
     * @param holidayName the name of the holiday to search for
     * @param isCurrentDayInclusive if true then the current day is examined, otherwise it is not
     * @param maxSearchYears the max. number of years to search (min=1) - applies for holidays which appear once a while
     * @returns the holiday which is preceding the given moment and has the given name or null if none found
     */
    public abstract previousHolidayWithName(momentToStart: Moment,
        holidayName: string,
        isCurrentDayInclusive?: boolean,
        maxSearchYears?: number,
    ): Promise<Holiday | null> | Holiday | null;

    /**
     * Returns the identifiers of all countries which are registered and for which you can request holidays.
     * @returns a map which maps the country abbreviation to its respective country name
     */
    public static getCountryIdentifiers(): Map<CountryAbbreviation, CountryName> {
        return HolidayDefinitionFactoryRegistry.getInstance().getAllAvailableCountryIdentifiers();
    }

    /**
     * Returns the id of all administrative units within the selected country.
     * @returns an array of identifiers for administrative units (i.e. states and regions)
     */
    public static getAdministrativeUnitIdentifiers(countryId: CountryIdentifier) {

        return HolidayDefinitionFactoryRegistry.getInstance().getFactoryByCountryIdentifier(countryId)
            .getCountry()
            .getAdministrativeUnits()
            .map((unit) => unit.getAbbreviation());
    }

    /**
     * Returns the id of all states within the selected country.
     * @returns an array of identifiers for states
     */
    public static getStateIdentifiers(countryId: CountryIdentifier) {

        return HolidayDefinitionFactoryRegistry.getInstance().getFactoryByCountryIdentifier(countryId)
            .getCountry()
            .getAdministrativeUnits()
            .filter((unit) => unit instanceof State)
            .map((unit) => unit.getAbbreviation());
    }

    /**
     * Returns the id of all regions within the selected country.
     * @returns an array of identifiers for regions
     */
    public static getRegionIdentifiers(countryId: CountryIdentifier) {

        return HolidayDefinitionFactoryRegistry.getInstance().getFactoryByCountryIdentifier(countryId)
            .getCountry()
            .getAdministrativeUnits()
            .filter((unit) => unit instanceof Region)
            .map((unit) => unit.getAbbreviation());
    }
}

// it is important that this import is after the export of AbstractMomentHolidays (circular dependency fix)
import { SyncMomentHoliday } from "./sync-moment-holiday";

// define country identifiers
type GermanCountryIdentifier = GermanCountryName | GermanCountryAbbrevition;
type AustrianCountryIdentifier = AustrianCountryName | AustrianCountryAbbrevition;
type SwedishCountryIdentifier = SwedishCountryName | SwedishCountryAbbrevition;

// merge identifiers for all countries
export type CountryName = GermanCountryName | AustrianCountryName | SwedishCountryName;
export type CountryAbbreviation = GermanCountryAbbrevition | AustrianCountryAbbrevition | SwedishCountryAbbrevition;
export type CountryIdentifier = GermanCountryIdentifier | AustrianCountryIdentifier | SwedishCountryIdentifier;
export type StateIdentifier = GermanStateAbbreviation;  // AustrianStateAbbreviation
export type RegionIdentifier = GermanRegionAbbreviation;

// merge state and region identifiers
export type AdministrativeUnitIdentifier = StateIdentifier | RegionIdentifier;

export function MomentHolidayFactoryMethod(country: GermanCountryIdentifier,
    ...administrativeUnits: Array<GermanStateAbbreviation | GermanRegionAbbreviation | "ALL">): SyncMomentHoliday;

export function MomentHolidayFactoryMethod(country: AustrianCountryIdentifier,
    ...administrativeUnits: Array<"ALL">): SyncMomentHoliday;

// tslint:disable-next-line:unified-signatures
export function MomentHolidayFactoryMethod(country: SwedishCountryIdentifier,
    ...administrativeUnits: Array<"ALL">): SyncMomentHoliday;

// see: https://github.com/Microsoft/TypeScript/issues/27297s
// export function MomentHolidayFactoryMethod(
//    country: CountryIdentifier,
//    ...administrativeUnits: Array<AdministrativeUnitIdentifier | "ALL">): SyncMomentHoliday;

/**
 * Returns a moment holiday configuration for the given entities.
 * If you provide a country only, you get the country holidays only.
 * If you provide the state identifier "ALL", then all state holidays will be merged with the country holidays.
 * If you provide any states identifiers other then "ALL", then those states's holidays will be merged with
 * the country holidays.
 *
 * @param country the country to look up
 * @param dbConfig a database config which instructs the module to load external holiday definitions from a database
 * @param administrativeUnits the administrative unit(s) to look up
 * @returns a moment holiday configuration which is configured to compute holidays for the given country and units
 */
export function MomentHolidayFactoryMethod(
    country: CountryIdentifier,
    ...administrativeUnits: Array<AdministrativeUnitIdentifier | "ALL">): SyncMomentHoliday {

    return new SyncMomentHoliday(country, administrativeUnits);
}
