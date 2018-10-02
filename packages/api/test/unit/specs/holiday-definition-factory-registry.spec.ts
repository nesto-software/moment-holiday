import { AbstractHolidayDefinitionFactory } from "@nesto-software/moment-holiday-core";
import { CountryIdentifier } from "../../../src";
import { HolidayDefinitionFactoryRegistry } from "../../../src/holiday-definition-factory-registry";
import { addExpectToContainObject } from "../extend-expect-by-to-contain-object";

addExpectToContainObject();

describe("HolidayDefinitionFactoryRegistry", () => {

    let instance: HolidayDefinitionFactoryRegistry;

    beforeEach(() => {

        instance = HolidayDefinitionFactoryRegistry.getInstance();

    });

    describe("getInstance", () => {

        it("should return an instance for the first call", (done) => {

            // execute method
            const result = HolidayDefinitionFactoryRegistry.getInstance();

            // verify
            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(HolidayDefinitionFactoryRegistry);

            done();

        });

        it("should return always the same instance for the two calls", (done) => {

            // execute method
            const result1 = HolidayDefinitionFactoryRegistry.getInstance();
            const result2 = HolidayDefinitionFactoryRegistry.getInstance();

            // verify
            expect(result1).toBe(result2);

            done();

        });

    });

    describe("getFactoryByCountryIdentifier", () => {

        describe("test all registered factories and the related country identifiers", () => {

            // tslint:disable-next-line:max-line-length
            for (const factory of (HolidayDefinitionFactoryRegistry.getInstance() as any).availableHolidayDefinitionFactories as AbstractHolidayDefinitionFactory[]) {
                const ids = [factory.getCountryName(), factory.getCountryAbbreviation()];

                for (const country of ids) {

                    // tslint:disable-next-line:max-line-length
                    it(`should return an ${factory.constructor.name} instance for country-identifier ${country}`, (done) => {

                        // execute method
                        const result = instance.getFactoryByCountryIdentifier(country as CountryIdentifier);

                        // verify
                        expect(result).not.toBeNull();
                        expect(result).toBe(factory);

                        done();

                    });

                }

            }

        });

        it("should throw an exception for an invalid country identifier", (done) => {

            // prepare
            const invalidCountryIdentifier = "TOTALLY INVALID COUNTRY IDENTIFIER, WHICH IS NOT IN USE";

            // execute method
            try {
                const result = instance.getFactoryByCountryIdentifier(invalidCountryIdentifier as CountryIdentifier);
                fail();
            } catch (e) {

            }

            done();

        });

    });

    describe("getAllAvailableCountryIdentifiers", () => {

        describe("test all registered factories and the related country identifiers", () => {

            // tslint:disable-next-line:max-line-length
            for (const factory of (HolidayDefinitionFactoryRegistry.getInstance() as any).availableHolidayDefinitionFactories as AbstractHolidayDefinitionFactory[]) {
                const countryAbbreviation = factory.getCountryAbbreviation();
                const countryName = factory.getCountryName();

                // tslint:disable-next-line:max-line-length
                it(`should include mapping with country-name: ${countryName} to abbreviation: ${countryAbbreviation}`, (done) => {

                    // execute method
                    const result = Array.from(instance.getAllAvailableCountryIdentifiers().entries());

                    // verify
                    expect(result).toContainEqual([countryAbbreviation, countryName]);

                    done();

                });
            }

        });

    });

});