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
import { HolidayName } from "./holiday-names";

export class YOUR_COUNTRYCountryLocale extends AbstractLocale {

    private readonly someLaw = new Legislation(
        "NAME_OF_THE_LAW",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [

            // e.g. the christmas holiday definition
            {
                name: HolidayName.CHRISTMAS,                                // write all names in the HolidayName enum and export it via index.js
                date: new RecurringDate(25, 11),                            // christmas is each year at December 25th
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),            // tag public holidays
                    new LegislationTag(this.someLaw),     // whenever possible, add the legislation reference for public holidays
                ],                                           // you are free to add more tags and even create your own
            },
        ];
    }
}
