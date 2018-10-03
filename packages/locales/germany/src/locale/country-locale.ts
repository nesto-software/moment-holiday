import {
    AbstractLocale,
    IHolidayDefinitionInternal,
    LateTag,
    Legislation,
    LegislationTag,
    NonRecurringDate,
    RecurringDate,
    SpecialSurchargeDayTag,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { HolidayName } from "./holiday-names";

export class GermanCountryLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Einigungsvertrag",
        url.parse("https://www.gesetze-im-internet.de/einigvtr/BJNR208890990.html"),
        "Kap. 1 Art. 2 II",
    );

    private readonly legislationForReformationstag = new Legislation(
        "Unterschiedliche Landesverordnungen der jeweiligen Bundesländer",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            {
                name: HolidayName.TAG_DER_DEUTSCHEN_EINHEIT,
                date: new RecurringDate(3, 9),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
            {
                name: HolidayName.SILVESTER,
                date: new RecurringDate(31, 11),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LateTag(),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.REFORMATIONSTAG,
                date: NonRecurringDate.forYears(31, 9, [2017]),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislationForReformationstag),
                ],
            },
        ];
    }
}
