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

export class BWStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feiertagsgesetz",
        // tslint:disable-next-line:max-line-length
        url.parse("http://www.landesrecht-bw.de/jportal/?quelle=jlink&query=FeiertG+BW&psml=bsbawueprod.psml&max=true&aiz=true#jlr-FeiertGBWpG1"),
        "Abschn. 1 §1",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return COMMON_STATE_HOLIDAY_DEFINITIONS(this.legislation).concat([
            {
                name: HolidayName.HEILIGE_DREI_KOENIGE,
                date: new RecurringDate(6, 0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
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
