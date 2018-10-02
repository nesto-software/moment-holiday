import { AustrianHolidayDefinitionFactory } from "@nesto-software/moment-holiday-austria";
import { AbstractHolidayDefinitionFactory } from "@nesto-software/moment-holiday-core";
import { GermanHolidayDefinitionFactory } from "@nesto-software/moment-holiday-germany";
import { CountryAbbreviation, CountryIdentifier, CountryName } from "./abstract-moment-holiday";

export class HolidayDefinitionFactoryRegistry {

    private readonly availableHolidayDefinitionFactories: AbstractHolidayDefinitionFactory[] = [
        new GermanHolidayDefinitionFactory(),
        new AustrianHolidayDefinitionFactory(),
    ];

    private factoryByCountryName = new Map<CountryName, AbstractHolidayDefinitionFactory>();
    private factoryByCountryAbbreviation = new Map<CountryAbbreviation, AbstractHolidayDefinitionFactory>();

    private constructor() {

        // build map of available factories
        for (const factory of this.availableHolidayDefinitionFactories) {
            const countryName = factory.getCountryName();
            const countryAbbreviation = factory.getCountryAbbreviation();
            this.factoryByCountryName.set(countryName as CountryName, factory);
            this.factoryByCountryAbbreviation.set(countryAbbreviation as CountryAbbreviation, factory);
        }

    }

    public getFactoryByCountryIdentifier(
        country: CountryIdentifier | CountryName | CountryAbbreviation,
    ): AbstractHolidayDefinitionFactory {

        let factory = this.factoryByCountryAbbreviation.get(country as CountryAbbreviation);

        if (!factory) {
            factory = this.factoryByCountryName.get(country as CountryName);
        }

        if (!factory) {
            throw new Error("Country identifier is not registered");
        }

        return factory;

    }

    public getAllAvailableCountryIdentifiers(): Map<CountryAbbreviation, CountryName> {
        const mapping = new Map<CountryAbbreviation, CountryName>();
        for (const factory of this.availableHolidayDefinitionFactories) {
            mapping.set(factory.getCountryAbbreviation() as CountryAbbreviation,
                factory.getCountryName() as CountryName);
        }

        return mapping;
    }

    private static instance: HolidayDefinitionFactoryRegistry;

    public static getInstance() {
        if (!HolidayDefinitionFactoryRegistry.instance) {
            HolidayDefinitionFactoryRegistry.instance = new HolidayDefinitionFactoryRegistry();
        }
        return HolidayDefinitionFactoryRegistry.instance;
    }

}
