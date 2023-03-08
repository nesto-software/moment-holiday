import {
    AbstractLocale,
    IHolidayDefinitionInternal,
    Legislation,
    LegislationTag,
    NonRecurringDate,
    RecurringDate,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { COMMON_STATE_HOLIDAY_DEFINITIONS } from "./common-state-holiday-definitions";
import { HolidayName } from "./holiday-names";

export class MVStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über Sonn- und Feiertage",
        // tslint:disable-next-line:max-line-length
        url.parse("http://www.landesrecht-mv.de/jportal/portal/page/bsmvprod.psml?showdoccase=1&doc.id=jlr-FTGMVrahmen&doc.part=X&doc.origin=bs&st=lr"),
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
            {
                name: HolidayName.WELTFRAUENTAG,
                date: NonRecurringDate.forPredicate(8, 2, (year) => {
                    return year > 2022;
                }),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ]);
    }
}
