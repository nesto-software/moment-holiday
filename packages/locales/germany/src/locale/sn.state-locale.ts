import {
    AbstractLocale,
    IHolidayDefinitionInternal,
    Legislation,
    LegislationTag,
    PeriodicInYearDate,
    RecurringDate,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as moment from "moment";
import * as url from "url";
import { COMMON_STATE_HOLIDAY_DEFINITIONS } from "./common-state-holiday-definitions";
import { HolidayName } from "./holiday-names";

export class SNStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über Sonn- und Feiertage im Freistaat Sachsen",
        // tslint:disable-next-line:max-line-length
        url.parse("https://www.revosax.sachsen.de/vorschrift/3997-SaechsSFG"),
        "§1 Abs. 1",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return COMMON_STATE_HOLIDAY_DEFINITIONS(this.legislation).concat([
            {
                name: HolidayName.REFORMATIONSTAG,
                date: new RecurringDate(31, 9),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
            {
                name: HolidayName.BUSS_UND_BETTAG,
                date: PeriodicInYearDate.withResolver((year: number) => {
                    const christmasDay = moment(new Date(year, 11, 25));
                    const adjustment = christmasDay.day() == 0 ? -7: 0; // if Christmas is a Sunday, we need to go back one week further
                    const adventSunday = christmasDay.day(-21 + adjustment);
                    return adventSunday.subtract(11, "days"); // Buß und Bettag is 11 days before first advent sunday
                }),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ]);
    }
}
