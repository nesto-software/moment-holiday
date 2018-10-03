var code = "\
exports.endpoint = function(request, response) {\n\
    require(\"moment\"); // moment is a peer dependency.\n\
    const createMomentHolidayConfiguration = require(\"@nesto-software/moment-holiday\").default;\n\n\
    const holidays = createMomentHolidayConfiguration(\"DE\", \"BW\");\n\
    const holidays2018 = holidays.in(2018);\n\
    const holidayNames = holidays2018.map((holiday) => holiday.name);\n\n\
    // write the holiday\n\
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });\n\
    response.end(JSON.stringify(holidayNames), \"UTF-8\");\n\
}\n\n\
console.log(process.env.RUNKIT_ENDPOINT_URL + process.env.RUNKIT_MOUNT_PATH);\n";

runkit("endpoint", code);