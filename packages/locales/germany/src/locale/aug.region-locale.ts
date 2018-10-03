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
import { HolidayName } from "./holiday-names";

export class AUGRegionLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feiertagsgesetz",
        url.parse("http://www.gesetze-bayern.de/Content/Document/BayFTG-1"),
        "Art. 1 II",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            {
                name: HolidayName.FRIEDENSFEST,
                date: new RecurringDate(8, 7),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ];
    }
}
