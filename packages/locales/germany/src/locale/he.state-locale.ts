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
import { COMMON_STATE_HOLIDAY_DEFINITIONS } from "./common-state-holiday-definitions";
import { HolidayName } from "./holiday-names";

export class HEStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Feiertagsgesetz",
        url.parse("http://www.gesetze-bayern.de/Content/Document/BayFTG-1"),
        "Art. 1 I S.1",
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
                name: HolidayName.PFINGSTSONNTAG,
                date: new EasterDependentDate(+49),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.legislation),
                ],
            },
        ]);
    }
}
