import { Holiday } from "@nesto-software/moment-holiday-core";
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";
const holidays = createMomentHolidayConfiguration("DE", "BY");
const swedishHolidays = createMomentHolidayConfiguration("SE");

const formatHolidayFn = (holiday: Holiday) => {
    return holiday.name + " (" + holiday.moment.format("DD.MM.") + ")";
}

console.log("German (Bavarian) holidays for 2018:");
for (const holiday of holidays.in(2018)) {
    console.log(formatHolidayFn(holiday));
}

console.log("\n\nSwedish (country-wide) holidays for 2018:");
for (const holiday of swedishHolidays.in(2018)) {
    console.log(formatHolidayFn(holiday));
}
