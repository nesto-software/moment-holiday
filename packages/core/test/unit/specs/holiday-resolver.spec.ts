import * as moment from "moment";
import * as momentNamespace from "moment";
import { extendMoment } from "moment-range";
import { Holiday, HolidayArray, HolidayDefinition, HolidayResolver, RecurringDate } from "../../../src";
import { addExpectToContainObject } from "../extend-expect-by-to-contain-object";
const momentRange = extendMoment(momentNamespace);

addExpectToContainObject();

describe("HolidayResolver", () => {

    let instance: HolidayResolver;

    beforeEach(() => {

        instance = new HolidayResolver();

    });

    describe("resolve", () => {

        it("should return no holidays for an empty definitions-array", (done) => {

            // prepare
            const queryRange = momentRange.range(moment(), moment());
            const holidayDefinitions: HolidayDefinition[] = []; // empty definitions-array

            // call method
            const result = instance.resolve(
                queryRange,
                holidayDefinitions,
            );

            // verify
            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(HolidayArray);
            expect(result.length).toBe(0);

            done();

        });

        it("should return one holiday for one definition and query-range less than one year", (done) => {

            // prepare
            const queryRange = momentRange.range(moment("2018-05-01"), moment("2018-12-31"));
            const holidayDefinitions: HolidayDefinition[] = [
                new HolidayDefinition(
                    "Nesto Founding Date",
                    new RecurringDate(27, 8),
                    [],
                ),
            ];

            // call method
            const result = instance.resolve(
                queryRange,
                holidayDefinitions,
            );

            // verify
            expect(result.length).toBe(1);
            const jsonResult = result.map(o => JSON.stringify(o));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2018-09-27"), holidayDefinitions[0])));

            done();

        });

        it("should return two holidays for one definition and query-range more than one year", (done) => {

            // prepare
            const queryRange = momentRange.range(moment("2017-05-01"), moment("2018-12-31"));
            const holidayDefinitions: HolidayDefinition[] = [
                new HolidayDefinition(
                    "Nesto Founding Date",
                    new RecurringDate(27, 8),
                    [],
                ),
            ];

            // call method
            const result = instance.resolve(
                queryRange,
                holidayDefinitions,
            );

            // verify
            expect(result.length).toBe(2);
            const jsonResult = result.map(o => JSON.stringify(o));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2018-09-27"), holidayDefinitions[0])));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2017-09-27"), holidayDefinitions[0])));

            done();

        });

        it("should return two holidays for two definitions and query-range less than one year", (done) => {

            // prepare
            const queryRange = momentRange.range(moment("2018-05-01"), moment("2018-12-31"));
            const holidayDefinitions: HolidayDefinition[] = [
                new HolidayDefinition(
                    "Nesto Founding Date",
                    new RecurringDate(27, 8),
                    [],
                ),
                new HolidayDefinition(
                    "One Day After Nesto Founding Date",
                    new RecurringDate(28, 8),
                    [],
                ),
            ];

            // call method
            const result = instance.resolve(
                queryRange,
                holidayDefinitions,
            );

            // verify
            expect(result.length).toBe(2);
            const jsonResult = result.map(o => JSON.stringify(o));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2018-09-27"), holidayDefinitions[0])));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2018-09-28"), holidayDefinitions[1])));

            done();

        });

        it("should return one holiday for two definitions and query-range cutting off one holiday", (done) => {

            // prepare
            const queryRange = momentRange.range(moment("2018-05-01"), moment("2018-09-27"));
            const holidayDefinitions: HolidayDefinition[] = [
                new HolidayDefinition(
                    "Nesto Founding Date",
                    new RecurringDate(27, 8),
                    [],
                ),
                new HolidayDefinition(
                    "One Day After Nesto Founding Date",
                    new RecurringDate(28, 8),
                    [],
                ),
            ];

            // call method
            const result = instance.resolve(
                queryRange,
                holidayDefinitions,
            );

            // verify
            expect(result.length).toBe(1);
            const jsonResult = result.map(o => JSON.stringify(o));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2018-09-27"), holidayDefinitions[0])));

            done();

        });

        it("should include start and end date by default", (done) => {

            // prepare
            const queryRange = momentRange.range(moment("2017-09-28"), moment("2018-09-27"));
            const holidayDefinitions: HolidayDefinition[] = [
                new HolidayDefinition(
                    "Nesto Founding Date",
                    new RecurringDate(27, 8),
                    [],
                ),
                new HolidayDefinition(
                    "One Day After Nesto Founding Date",
                    new RecurringDate(28, 8),
                    [],
                ),
            ];

            // call methods
            const result = instance.resolve(
                queryRange,
                holidayDefinitions,
            );

            // verify
            // expect(result.length).toBe(2);
            const jsonResult = result.map(o => JSON.stringify(o));
            expect(result.length).toBe(2);
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2017-09-28"), holidayDefinitions[1])));
            expect(jsonResult).toContainEqual(JSON.stringify(new Holiday(moment("2018-09-27"), holidayDefinitions[0])));

            done();

        });

    });

    // TODO: test excludeStart and excludeEnd AND test the snapTo day case -- state that days should be snapped

});
