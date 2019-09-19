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

export class THStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feier- und Gedenktagsgesetz",
        // tslint:disable-next-line:max-line-length
        url.parse("http://landesrecht.thueringen.de/jportal/?quelle=jlink&query=FeiertG+TH&psml=bsthueprod.psml&max=true&aiz=true"),
        "§2 Abs. I",
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
                name: HolidayName.WELTKINDERTAG,
                date: new RecurringDate(20, 8),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ]);
    }
}
