var codes = [
    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
// call on the moment object directly \n\
console.log(moment('2018-12-25').isHoliday(holidays))\n\n\
// call on the moment-holiday configuration \n\
console.log(holidays.isHoliday(moment('2018-12-23')))",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const core = require(\"@nesto-software/moment-holiday-core\");\n\
const TypeTag = core.TypeTag;\n\
const TypeTagValue = core.TypeTagValue;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
// filter out all holidays which are not public holidays\n\
const result = moment('2018-12-25').isHoliday(holidays, (holiday) => {\n\
    return holiday.isTagged(TypeTag, TypeTagValue.PUBLIC);\n\
});\n\
console.log(result);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
holidays.inYear(2018);  // or: holidays.inYear(2018);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
holidays.inMonth(11, 2018);  // or: holidays.in(2018, 11);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
const start = moment('2018-04-01');\n\
const end = moment('2018-12-31');\n\
holidays.between(start, end);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const momentRange = require(\"moment-range\").extendMoment(moment);\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
const start = moment('2018-04-01');\n\
const end = moment('2018-12-31');\n\
const range = momentRange.range(start, end);\n\n\
// compute the holidays for a moment-range object\n\
holidays.for(range);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
const holidays2018 = holidays.inYear(2018);\n\
holidays2018.sortHolidaysAscending()",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
const holidays2018 = holidays.inYear(2018);\n\
holidays2018.sortHolidaysDescending()",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const core = require(\"@nesto-software/moment-holiday-core\");\n\
const TypeTag = core.TypeTag;\n\
const TypeTagValue = core.TypeTagValue;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
// filter out all holidays which are not public holidays\n\
const result = holidays.inYear(2018).filterHolidays((holiday) => {\n\
    return holiday.isTagged(TypeTag, TypeTagValue.PUBLIC);\n\
});\n\
console.log(result);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
holidays.getHolidayDefinitions();",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
// by default the current day is excluded!\n\
holidays.nextHoliday(moment('2018-12-24'));\n\n\
// or by using the moment object\n\
moment('2018-12-24').nextHoliday(holidays);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
// by default the current day is excluded!\n\
holidays.previousHoliday(moment('2018-12-24'));\n\n\
// or by using the moment object\n\
moment('2018-12-24').previousHoliday(holidays);",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
holidays.previousHoliday(moment('2018-12-24'), (holiday) => {\n\
    return holiday.name === \"Silvester\";\n\
});\n\n\
holidays.nextHoliday(moment('2018-12-24'), (holiday) => {\n\
    return holiday.name === \"Neujahrstag\";\n\
});",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\n\
holidays.previousHolidayWithName(moment('2018-12-24'), 'Silvester');\n\
holidays.nextHolidayWithName(moment('2018-12-24'), 'Neujahrstag');",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const AbstractMomentHoliday = require(\"@nesto-software/moment-holiday\").AbstractMomentHoliday;\n\n\
AbstractMomentHoliday.getCountryIdentifiers()",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const AbstractMomentHoliday = require(\"@nesto-software/moment-holiday\").AbstractMomentHoliday;\n\n\
// obtain all administrative units in Germany\n\
AbstractMomentHoliday.getAdministrativeUnitIdentifiers('DE');",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const AbstractMomentHoliday = require(\"@nesto-software/moment-holiday\").AbstractMomentHoliday;\n\n\
// obtain all states in Germany\n\
AbstractMomentHoliday.getStateIdentifiers('DE');",

    "const moment = require(\"moment\"); // moment is a peer dependency.\n\
const AbstractMomentHoliday = require(\"@nesto-software/moment-holiday\").AbstractMomentHoliday;\n\n\
// obtain all regions in Germany\n\
AbstractMomentHoliday.getRegionIdentifiers('DE');"
];

for (var i = 0; i < codes.length; i++) {
    runkit("basic-" + i, codes[i]);
}