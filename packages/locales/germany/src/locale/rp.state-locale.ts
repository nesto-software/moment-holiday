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

export class RPStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Landesgesetz über den Schutz der Sonn- und Feiertage",
        // tslint:disable-next-line:max-line-length
        url.parse("http://landesrecht.rlp.de/jportal/portal/t/rtk/page/bsrlpprod.psml?pid=Dokumentanzeige&showdoccase=1&js_peid=Trefferliste&fromdoctodoc=yes&doc.id=jlr-FeiertGRPpP2#focuspoint"),
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
        ]);
    }
}
