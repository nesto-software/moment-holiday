import {
    AbstractHolidayDefinitionFactory,
    Country,
} from "@nesto-software/moment-holiday-core";
import { SwedishCountryLocale } from "./locale/country-locale";

/**
 * Creates holiday definitions for Sweden.
 */
export class SwedishHolidayDefinitionFactory extends AbstractHolidayDefinitionFactory {
    private static readonly COUNTRY_NAME: SwedishCountryName = "Sweden";
    private static readonly COUNTRY_ABBREVIATION: SwedishCountryAbbrevition = "SE";

    public getCountryName(): string {
        return SwedishHolidayDefinitionFactory.COUNTRY_NAME;
    }

    public getCountryAbbreviation(): string {
        return SwedishHolidayDefinitionFactory.COUNTRY_ABBREVIATION;
    }

    public createCountry(): Country {
        return new Country(
            SwedishHolidayDefinitionFactory.COUNTRY_NAME,
            SwedishHolidayDefinitionFactory.COUNTRY_ABBREVIATION,
            [],
            new SwedishCountryLocale(),
        );
    }
}

export type SwedishCountryName = "Sweden";
export type SwedishCountryAbbrevition = "SE";
export type SwedishStateAbbreviation = "";
// export type SwedishRegionAbbreviation = ""; // non specified so far
