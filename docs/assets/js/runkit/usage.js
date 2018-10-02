var code = "\
require(\"moment\"); // moment is a peer dependency.\n\
const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\
const holidays2018 = holidays.in(2018);\n\
holidays2018.map(holiday => holiday.name + \" - \" + holiday.moment.format(\"DD.MM.YYYY\"));\
";

runkit("usage", code);
document.getElementById("runkit-fallback").innerHTML = "";