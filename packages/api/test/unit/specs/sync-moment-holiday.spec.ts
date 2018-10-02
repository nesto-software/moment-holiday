import { DatabaseConfiguration, Holiday, HolidayArray, HolidayResolver, HolidayDefinition } from "@nesto-software/moment-holiday-core";
import { GermanHolidayDefinitionFactory } from "@nesto-software/moment-holiday-germany";
import createMockInstance from "jest-create-mock-instance";
import * as momentNamespace from "moment";
import * as moment from "moment";
import { extendMoment } from "moment-range";
import { AsyncMomentHoliday } from "../../../src";
import { HolidayDefinitionFactoryRegistry } from "../../../src/holiday-definition-factory-registry";
import { SyncMomentHoliday } from "../../../src/sync-moment-holiday";
const momentRange = extendMoment(momentNamespace);

describe("SyncMomentHoliday", () => {

    let registry: HolidayDefinitionFactoryRegistry;
    let instance: SyncMomentHoliday;
    const country = "DE";

    beforeEach(() => {

        registry = createMockInstance(HolidayDefinitionFactoryRegistry as any);
        instance = new SyncMomentHoliday(country, []);

    });

    describe("constructor", () => {

        it("should create a holiday-definition-factory-instance", (done) => {

            // prepare
            const country = "DE";
            const administrativeUnits: any = [];
            const expectedHolidayDefinitionFactoryInstance = {};
            jest.spyOn(registry, "getFactoryByCountryIdentifier").mockImplementation(
                () => expectedHolidayDefinitionFactoryInstance,
            );

            // execute method
            const instance = new SyncMomentHoliday(country, administrativeUnits, registry);

            // verify
            expect(instance).not.toBeNull();
            expect((instance as any).getHolidayDefinitionFactory()).toBe(expectedHolidayDefinitionFactoryInstance);
            expect(registry.getFactoryByCountryIdentifier).toBeCalledWith(country);

            done();

        });

        it("should throw an error for an invalid country-identifier", (done) => {

            // prepare
            const country = "INVALID IDENTIFIER" as any;
            const administrativeUnits: any = [];
            const expectedHolidayDefinitionFactoryInstance = {};
            jest.spyOn(registry, "getFactoryByCountryIdentifier").mockImplementation(
                () => { throw new Error(); }
            );

            // execute method
            try {
                let instance = new SyncMomentHoliday(country, administrativeUnits, registry);
                fail("expected an exception");
            } catch (e) {
            }

            done();

        });

    });

    describe("withDatabase", () => {

        it("should return an AsyncMomentHoliday instance", () => {

            // prepare
            const databaseConfiguration = createMockInstance(DatabaseConfiguration);

            // call method
            const result = instance.withDatabase(databaseConfiguration);

            // verify
            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(AsyncMomentHoliday);

        });

    });

    describe("getHolidayDefinitions", () => {

        it("should return the holiday-definitions by using the holiday-definition-factory", (done) => {

            // prepare and inject mock
            const expectedHolidayDefinitionFactoryInstance
                = createMockInstance<GermanHolidayDefinitionFactory>(GermanHolidayDefinitionFactory);
            jest.spyOn(registry, "getFactoryByCountryIdentifier").mockImplementation(
                () => expectedHolidayDefinitionFactoryInstance,
            );
            const expectedDefinitions: HolidayDefinition[] = [];
            jest.spyOn(expectedHolidayDefinitionFactoryInstance, "getDefinitions").mockImplementation(
                () => expectedDefinitions,
            );
            const instance = new SyncMomentHoliday(country, [], registry);

            // execute method
            let result = instance.getHolidayDefinitions();

            // verify
            expect(result).toBe(expectedDefinitions);

            done();

        });

    });

    describe("for", () => {

        it("should return holidays from holidayResolver", (done) => {

            // prepare and inject mock
            const holidayDefinitionFactoryMock
                = createMockInstance<GermanHolidayDefinitionFactory>(GermanHolidayDefinitionFactory);
            jest.spyOn(registry, "getFactoryByCountryIdentifier").mockImplementation(
                () => holidayDefinitionFactoryMock,
            );
            const holidayDefinitions: HolidayDefinition[] = [];
            jest.spyOn(holidayDefinitionFactoryMock, "getDefinitions").mockImplementation(
                () => holidayDefinitions,
            );
            const instance = new SyncMomentHoliday(country, [], registry);
            let holidayResolverMock = createMockInstance(HolidayResolver);
            const expectedHolidays = new HolidayArray();
            jest.spyOn(holidayResolverMock, "resolve").mockImplementation(() => expectedHolidays);
            (instance as any).holidayResolver = holidayResolverMock;
            const queryRange = momentRange.range(moment(), moment()).snapTo("day");

            // execute method
            const result = instance.for(queryRange);

            // verify
            expect(holidayResolverMock.resolve).toBeCalledWith(queryRange, holidayDefinitions, undefined);

            done();

        });

        it("should snap the given range to a day", (done) => {

            // prepare and inject mock
            const holidayDefinitionFactoryMock =
                createMockInstance<GermanHolidayDefinitionFactory>(GermanHolidayDefinitionFactory);
            jest.spyOn(registry, "getFactoryByCountryIdentifier").mockImplementation(
                () => holidayDefinitionFactoryMock,
            );
            const holidayDefinitions: HolidayDefinition[] = [];
            jest.spyOn(holidayDefinitionFactoryMock, "getDefinitions").mockImplementation(
                () => holidayDefinitions,
            );
            const instance = new SyncMomentHoliday(country, [], registry);
            let holidayResolverMock = createMockInstance(HolidayResolver);
            const expectedHolidays = new HolidayArray();
            jest.spyOn(holidayResolverMock, "resolve").mockImplementation(() => expectedHolidays);
            (instance as any).holidayResolver = holidayResolverMock;
            const givenQueryRange = momentRange.range(moment("2018-01-05 12:00"), moment("2018-01-08 18:00"));
            const expectedQueryRange = givenQueryRange.snapTo("day");

            // execute method
            const result = instance.for(givenQueryRange);

            // verify
            expect(holidayResolverMock.resolve).toBeCalledWith(
                expectedQueryRange,
                holidayDefinitions,
                undefined,
            );

            done();

        });

        // todo: insert test cases for excludeStart and excludeEnd

    });

    describe("isHoliday", () => {

        it("should call the for-method with the correct range", () => {

            // prepare
            const momentToTest = moment("2018-01-09");
            instance.for = jest.fn(() => new HolidayArray());

            // call method
            const result = instance.isHoliday(momentToTest);

            // verify
            expect(instance.for).toBeCalledWith(momentRange.range(momentToTest, momentToTest));

        });

        it("should return false if no holidays were found", () => {

            // prepare
            const momentToTest = moment("2018-01-09");
            instance.for = jest.fn(() => new HolidayArray());

            // call method
            const result = instance.isHoliday(momentToTest);

            // verify
            expect(result).toBeFalsy();

        });

        it("should return true if one holiday was found", () => {

            // prepare
            const amoment = moment();
            const aholidayDefinition = {} as HolidayDefinition;
            const momentToTest = moment("2018-01-09");
            instance.for = jest.fn(() => new HolidayArray(new Holiday(amoment, aholidayDefinition)));

            // call method
            const result = instance.isHoliday(momentToTest);

            // verify
            expect(result).toBeTruthy();

        });

        it("should return true if two holidays were found", () => {

            // prepare
            const amoment = moment();
            const aholidayDefinition = {} as HolidayDefinition;
            const momentToTest = moment("2018-01-09");
            instance.for = jest.fn(() => new HolidayArray(
                new Holiday(amoment, aholidayDefinition),
                new Holiday(amoment, aholidayDefinition),
            ));

            // call method
            const result = instance.isHoliday(momentToTest);

            // verify
            expect(result).toBeTruthy();

        });

        it("should call the predicate-method and return false if all holidays were filtered out", () => {

            // prepare
            const amoment = moment();
            const aholidayDefinition = {} as HolidayDefinition;
            const momentToTest = moment("2018-01-09");
            const holidayArray = new HolidayArray(
                new Holiday(amoment, aholidayDefinition),
                new Holiday(amoment, aholidayDefinition),
            );
            holidayArray.filterHolidays = jest.fn();
            jest.spyOn(holidayArray, "filterHolidays").mockImplementation(() => new HolidayArray());
            instance.for = jest.fn(() => holidayArray);
            const predicate = () => false;

            // call method
            const result = instance.isHoliday(momentToTest, predicate);

            // verify
            expect(holidayArray.filterHolidays).toBeCalledWith(predicate);
            expect(result).toBeFalsy();

        });

    });

    // todo: test other methods

});