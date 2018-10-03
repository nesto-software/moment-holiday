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

export class SNCatholicRegionLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über Sonn- und Feiertage im Freistaat Sachsen",
        // tslint:disable-next-line:max-line-length
        url.parse("https://www.revosax.sachsen.de/vorschrift/3997-SaechsSFG"),
        "§1 Abs. 1",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            // nur in den vom Staatsministerium des Innern durch Rechtsverordnung bestimmten Regionen
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
