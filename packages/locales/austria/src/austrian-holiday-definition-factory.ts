import {
    AbstractHolidayDefinitionFactory,
    Country,
} from "@nesto-software/moment-holiday-core";
import { AustrianCountryLocale } from "./locale/country-locale";

/**
 * Creates holiday definitions for austria.
 */
export class AustrianHolidayDefinitionFactory extends AbstractHolidayDefinitionFactory {
    private static readonly COUNTRY_NAME: AustrianCountryName = "Austria";
    private static readonly COUNTRY_ABBREVIATION: AustrianCountryAbbrevition = "AT";

    public getCountryName(): string {
        return AustrianHolidayDefinitionFactory.COUNTRY_NAME;
    }

    public getCountryAbbreviation(): string {
        return AustrianHolidayDefinitionFactory.COUNTRY_ABBREVIATION;
    }

    public createCountry(): Country {
        return new Country(
            AustrianHolidayDefinitionFactory.COUNTRY_NAME,
            AustrianHolidayDefinitionFactory.COUNTRY_ABBREVIATION,
            [],
            new AustrianCountryLocale(),
        );
    }
}

export type AustrianCountryName = "Austria";
export type AustrianCountryAbbrevition = "AT";
export type AustrianStateAbbreviation = "";
// export type AustrianRegionAbbreviation = ""; // non specified so far
