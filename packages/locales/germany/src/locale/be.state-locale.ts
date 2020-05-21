import {
    AbstractLocale,
    IHolidayDefinitionInternal,
    Legislation,
    LegislationTag,
    NonRecurringDate,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { COMMON_STATE_HOLIDAY_DEFINITIONS } from "./common-state-holiday-definitions";
import { HolidayName } from "./holiday-names";

export class BEStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über die Sonn- und Feiertage",
        // tslint:disable-next-line:max-line-length
        url.parse("http://gesetze.berlin.de/jportal/?quelle=jlink&query=FeiertG+BE+%C2%A7+1&psml=bsbeprod.psml&max=true"),
        "§1 Abs. 1",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return COMMON_STATE_HOLIDAY_DEFINITIONS(this.legislation).concat([
            {
                name: HolidayName.WELTFRAUENTAG,
                date: NonRecurringDate.forPredicate(8, 2, (year) => {
                    return year > 2018;
                }),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),   // not added to this document yet - pending
                ],
            }, {
                name: HolidayName.TAG_DER_BEFREIUNG,
                date: NonRecurringDate.forPredicate(8, 4, (year) => {
                    return year === 2020; // only applies for 8.5.2020
                }),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),   // not added to this document yet - pending
                ],
            },
        ]);
    }
}
