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

export class HBStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über die Sonn- und Feiertage",
        // tslint:disable-next-line:max-line-length
        url.parse("https://www.transparenz.bremen.de/sixcms/detail.php?gsid=bremen2014_tp.c.74780.de&template=20_gp_ifg_meta_detail_d"),
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
