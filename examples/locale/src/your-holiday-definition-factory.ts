import {
    AbstractHolidayDefinitionFactory,
    Country,
} from "@nesto-software/moment-holiday-core";
import { YOUR_COUNTRYCountryLocale } from "./locale/country-locale";

/**
 * Creates holiday definitions for YOUR_COUNTRY.
 */
export class YOUR_COUNTRYHolidayDefinitionFactory extends AbstractHolidayDefinitionFactory {
    private static readonly COUNTRY_NAME: YOUR_COUNTRYCountryName = "YOUR_COUNTRYNAME";
    private static readonly COUNTRY_ABBREVIATION: YOUR_COUNTRYCountryAbbrevition = "YOUR_COUNTRYABBREVIATION"; // two letter iso country code, such as: US
    private static readonly COUNTRY_IDS = [YOUR_COUNTRYHolidayDefinitionFactory.COUNTRY_NAME,
    YOUR_COUNTRYHolidayDefinitionFactory.COUNTRY_ABBREVIATION];

    /**
     * Returns the country identifiers for the country which is used by this factory.
     * It is the country whose holiday definitions are created by this factory.
     */
    public getCountryIdentifiers(): string[] {
        return YOUR_COUNTRYHolidayDefinitionFactory.COUNTRY_IDS;
    }

    public createCountry(): Country {
        return new Country(
            YOUR_COUNTRYHolidayDefinitionFactory.COUNTRY_NAME,
            YOUR_COUNTRYHolidayDefinitionFactory.COUNTRY_ABBREVIATION,
            [],     // TODO: add all states and regions here
            new YOUR_COUNTRYCountryLocale(),
        );
    }
}

export type YOUR_COUNTRYCountryName = "YOUR_COUNTRYNAME";
export type YOUR_COUNTRYCountryAbbrevition = "YOUR_COUNTRYABBREVIATION";
export type YOUR_COUNTRYStateAbbreviation = "";
export type YOUR_COUNTRYRegionAbbreviation = "";
