import {
    AbstractLocale,
    EasterDependentDate,
    IHolidayDefinitionInternal,
    Legislation,
    LegislationTag,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { HolidayName } from "./holiday-names";

export class THCatholicRegionLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feiertagsgesetz",
        // tslint:disable-next-line:max-line-length
        url.parse("http://landesrecht.thueringen.de/jportal/?quelle=jlink&query=FeiertG+TH&psml=bsthueprod.psml&max=true&aiz=true#jlr-FeiertGTHV2P2"),
        "§2 Art. 2",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            {
                name: HolidayName.FRONLEICHNAM,
                date: new EasterDependentDate(+60),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ];
    }
}
