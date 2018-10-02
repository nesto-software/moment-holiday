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

export class BYCatholicRegionLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feiertagsgesetz",
        url.parse("http://www.gesetze-bayern.de/Content/Document/BayFTG-1"),
        "Art. 1 I S.2",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            {
                name: HolidayName.MARIA_HIMMELFAHRT,
                date: new RecurringDate(15, 7),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ];
    }
}
