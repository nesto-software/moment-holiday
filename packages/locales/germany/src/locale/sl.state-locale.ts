import {
    AbstractLocale,
    EasterDependentDate,
    IHolidayDefinitionInternal,
    Legislation,
    LegislationTag,
    RecurringDate,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { COMMON_STATE_HOLIDAY_DEFINITIONS } from "./common-state-holiday-definitions";
import { HolidayName } from "./holiday-names";

export class SLStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feiertagsgesetz - SFG",
        // tslint:disable-next-line:max-line-length
        url.parse("http://sl.juris.de/cgi-bin/landesrecht.py?d=http://sl.juris.de/sl/gesamt/FeiertG_SL_1976.htm"),
        "§2 Abs. 1",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return COMMON_STATE_HOLIDAY_DEFINITIONS(this.legislation).concat([
            {
                name: HolidayName.FRONLEICHNAM,
                date: new EasterDependentDate(+60),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
            {
                name: HolidayName.ALLERHEILIGEN,
                date: new RecurringDate(1, 10),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
            {
                name: HolidayName.MARIA_HIMMELFAHRT,
                date: new RecurringDate(15, 7),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ]);
    }
}
