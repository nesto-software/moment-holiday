import {
    AbstractLocale,
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

export class SHStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über Sonn- und Feiertage",
        // tslint:disable-next-line:max-line-length
        url.parse("http://www.lexsoft.de/cgi-bin/lexsoft/justizportal_nrw.cgi?xid=356879,1"),
        "§2 Abs. 1",
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
        ]);
    }
}
