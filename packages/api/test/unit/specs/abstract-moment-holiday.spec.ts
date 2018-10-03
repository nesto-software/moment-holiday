import createMockInstance from "jest-create-mock-instance";
import { AbstractMomentHoliday } from "../../../src";
import { HolidayDefinitionFactoryRegistry } from "../../../src/holiday-definition-factory-registry";

describe("AbstractMomentHoliday", () => {

    let registry: HolidayDefinitionFactoryRegistry;

    beforeEach(() => {

        registry = createMockInstance(HolidayDefinitionFactoryRegistry as any);

    });

    describe("getCountryIdentifiers", () => {

        it("should create a holiday-definition-factory-instance", (done) => {

            // prepare
            jest.spyOn(HolidayDefinitionFactoryRegistry, "getInstance").mockImplementation(
                () => registry,
            );
            const expectedCountryIdentifiers = ["JUST A COUNTRY IDENTIFIER"];
            jest.spyOn(registry, "getAllAvailableCountryIdentifiers").mockImplementation(
                () => expectedCountryIdentifiers,
            );

            // execute method
            const result = AbstractMomentHoliday.getCountryIdentifiers();

            // verify
            expect(result).toBe(expectedCountryIdentifiers);

            done();

        });

    });

});