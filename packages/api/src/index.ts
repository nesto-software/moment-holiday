import {
    Holiday,
    HolidayArray,
    IDateRangeOptions,
} from "@nesto-software/moment-holiday-core";
import * as moment from "moment";
import { Moment } from "moment";
import { AbstractMomentHoliday } from "./abstract-moment-holiday";
import { AsyncMomentHoliday } from "./async-moment-holiday";
import { SyncMomentHoliday } from "./sync-moment-holiday";

// see: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
// Module Augmentation
declare module "moment" {
    /**
     * The Moment class from moment.js.
     * We extend this class by adding holiday specific methods.
     * Those methods delegate to the {@link MomentHoliday} class.
     */
    // tslint:disable-next-line:interface-name
    interface Moment {
        /**
         * Returns if this moment's day is a holiday for the given holiday configuration.
         * @param momentHoliday the holiday configuration to use for determining holidays
         * @param predicate if a holiday is determined, you can filter its tags via a predicate
         * @returns true if this moment's day is a holiday
         */
        isHoliday(
            momentHoliday: AsyncMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
        ): Promise<boolean>;
        isHoliday(
            momentHoliday: SyncMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
        ): boolean;
        isHoliday(
            momentHoliday: AbstractMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
        ): Promise<boolean> | boolean;

        /**
         * Returns the upcoming holiday for the given moment.
         * Optionally checks if the holiday fulfills the given predicate.
         *
         * @param momentHoliday the holiday configuration to use for determining holidays
         * @param predicate if a holiday is determined, you can filter its tags via a predicate
         * @param currentDayInclusive if true then the current day is examined, otherwise it is not
         * @returns the holiday which is following the given moment
         */
        nextHoliday(
            momentHoliday: AsyncMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
            currentDayInclusive?: boolean,
        ): Promise<Holiday | null>;
        nextHoliday(
            momentHoliday: SyncMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
            currentDayInclusive?: boolean,
        ): Holiday | null;

        /**
         * Returns the preceding holiday for the given moment.
         * @param momentHoliday the holiday configuration to use for determining holidays
         * @param predicate if a holiday is determined, you can filter its tags via a predicate
         * @param currentDayInclusive if true then the current day is examined, otherwise it is not
         * @returns the holiday which is preceding the given moment
         */
        previousHoliday(
            momentHoliday: AsyncMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
            currentDayInclusive?: boolean,
        ): Promise<Holiday | null>;
        previousHoliday(
            momentHoliday: SyncMomentHoliday,
            predicate?: (holiday: Holiday) => boolean,
            currentDayInclusive?: boolean,
        ): Holiday | null;

        /**
         * Returns the upcoming holiday for the given moment which has the given name.
         * @param momentHoliday the holiday configuration to use for determining holidays
         * @param holidayName the name of the holiday to search for
         * @param currentDayInclusive if true then the current day is examined, otherwise it is not
         * @param maxSearchYears max. number of years to search (min=1) - applies for holidays which appear once a while
         * @returns the holiday which is following the given moment and has the given name
         */
        nextHolidayWithName(
            momentHoliday: AsyncMomentHoliday,
            holidayName: string,
            currentDayInclusive?: boolean,
            maxSearchYears?: number,
        ): Promise<Holiday | null>;
        nextHolidayWithName(
            momentHoliday: SyncMomentHoliday,
            holidayName: string,
            currentDayInclusive?: boolean,
            maxSearchYears?: number,
        ): Holiday | null;

        /**
         * Returns the preceding holiday for the given moment which has the given name.
         * @param momentHoliday the holiday configuration to use for determining holidays
         * @param holidayName the name of the holiday to search for
         * @param currentDayInclusive if true then the current day is examined, otherwise it is not
         * @param maxSearchYears max. number of years to search (min=1) - applies for holidays which appear once a while
         * @returns the holiday which is preceding the given moment and has the given name
         */
        previousHolidayWithName(
            momentHoliday: AsyncMomentHoliday,
            holidayName: string,
            currentDayInclusive?: boolean,
            maxSearchYears?: number,
        ): Promise<Holiday | null>;
        previousHolidayWithName(
            momentHoliday: SyncMomentHoliday,
            holidayName: string,
            currentDayInclusive?: boolean,
            maxSearchYears?: number,
        ): Holiday | null;

        /**
         * Returns all holidays between this moment (inclusive by default) and the given end moment.
         * @param momentHoliday the holiday configuration to use for determining holidays
         * @param end the end date (inclusive by default)
         * @param excludeStart if true then start day is exclusive, inclusive otherwise
         * @param excludeEnd if true then end day is exclusive, inclusive otherwise
         * @returns an array of holidays between this moment and the given end moment
         */
        holidaysBetween(
            momentHoliday: AsyncMomentHoliday,
            end: this,
            options?: IDateRangeOptions,
        ): Promise<HolidayArray<Holiday>>;
        holidaysBetween(
            momentHoliday: SyncMomentHoliday,
            end: this,
            options?: IDateRangeOptions,
        ): HolidayArray<Holiday>;
    }
}

moment.fn.isHoliday = function(
    momentHoliday: AbstractMomentHoliday,
    predicate?: (holiday: Holiday) => boolean,
): any {
    return momentHoliday.isHoliday(this, predicate);
};

moment.fn.nextHoliday = function(
    momentHoliday: AbstractMomentHoliday,
    predicate?: (holiday: Holiday) => boolean,
    currentDayInclusive?: boolean,
): any {
    return momentHoliday.nextHoliday(this, predicate, currentDayInclusive);
};

moment.fn.previousHoliday = function(
    momentHoliday: AbstractMomentHoliday,
    predicate?: (holiday: Holiday) => boolean,
    currentDayInclusive?: boolean,
): any {
    return momentHoliday.previousHoliday(this, predicate, currentDayInclusive);
};

moment.fn.nextHolidayWithName = function(
    momentHoliday: AbstractMomentHoliday,
    holidayName: string,
    currentDayInclusive?: boolean,
    maxSearchYears?: number,
): any {
    return momentHoliday.nextHolidayWithName(
        this,
        holidayName,
        currentDayInclusive,
        maxSearchYears,
    );
};

moment.fn.previousHolidayWithName = function(
    momentHoliday: AbstractMomentHoliday,
    holidayName: string,
    currentDayInclusive?: boolean,
    maxSearchYears?: number,
): any {
    return momentHoliday.previousHolidayWithName(
        this,
        holidayName,
        currentDayInclusive,
        maxSearchYears,
    );
};

moment.fn.holidaysBetween = function(
    momentHoliday: AbstractMomentHoliday,
    end: Moment,
    options?: IDateRangeOptions,
): any {
    return momentHoliday.between(this, end, options);
};

export {
    MomentHolidayFactoryMethod as default,
    AbstractMomentHoliday,
    AdministrativeUnitIdentifier,
    CountryIdentifier,
    CountryName,
    CountryAbbreviation,
    RegionIdentifier,
    StateIdentifier,
} from "./abstract-moment-holiday";

export { AsyncMomentHoliday } from "./async-moment-holiday";
export { SyncMomentHoliday } from "./sync-moment-holiday";

/* export country specific data (such as holiday names and tags) */

// Germany
export { HolidayNameGermany } from "@nesto-software/moment-holiday-germany";

// Austria
export {
    ReligionTag,
    Religion,
    HolidayNameAustria,
} from "@nesto-software/moment-holiday-austria";

// Sweden
export { HolidayNameSweden } from "@nesto-software/moment-holiday-sweden";
