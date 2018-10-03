import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";
const holidays = createMomentHolidayConfiguration("DE", "BY");

console.log("German (Bavarian) holidays for 2018:");
for (const holiday of holidays.in(2018)) {
    console.log(holiday.name);
}