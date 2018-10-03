var createMomentHolidayConfiguration = require("@nesto-software/moment-holiday");

var holidays = createMomentHolidayConfiguration("DE", "BW");
var holidays2018 = holidays.in(2018);

for (var holiday of holidays2018) {
    console.log(holiday.name);
}