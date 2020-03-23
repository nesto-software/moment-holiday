import {
    AbstractLocale,
    EasterDependentDate,
    IHolidayDefinitionInternal,
    LateTag,
    Legislation,
    LegislationTag,
    RecurringDate,
    SpecialSurchargeDayTag,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { HolidayName } from "./holiday-names";
import {MidsummerDependentDate} from "../date/midsummer-dependent-date";
import {AllHallowsDependentDate} from "../date/all-hallows-dependent-date";

export class SwedishCountryLocale extends AbstractLocale {

    private readonly allmanna_helgdagar_1989_253 = new Legislation(
        "Lag (1989:253) om allmänna helgdagar",
        url.parse("https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253"),
    );

    private readonly kollektivavtal = new Legislation(
        "Kollektivavtal",  // there a lots of so called "Kollektivavtal" between employers and employees
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            {
                name: HolidayName.NYARSDAGEN,
                date: new RecurringDate(1, 0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.TRETTONDAGSAFTON,
                date: new RecurringDate(5, 0),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.TRETTONDEDAG_JUL,
                date: new RecurringDate(6, 0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.SKARTORSDAGEN,
                date: new EasterDependentDate(-3),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.LANGFREDAGEN,
                date: new EasterDependentDate(-2),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.PASKAFTON,
                date: new EasterDependentDate(-1),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.PASKDAGEN,
                date: new EasterDependentDate(0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.ANNANDAG_PASK,
                date: new EasterDependentDate(+1),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.VALBORGSMASSOAFTON,
                date: new RecurringDate(30, 3),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.FORSTA_MAJ,
                date: new RecurringDate(1, 4),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.KRISTI_HIMMELFARD,
                date: new EasterDependentDate(+39),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.PINGSTAFTON,
                date: new EasterDependentDate(+48),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.PINGSTDAGEN,
                date: new EasterDependentDate(+49),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.ANNANDAG_PINGST,
                date: new EasterDependentDate(+50),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.NATIONALDAGEN,
                date: new RecurringDate(6, 5),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.MIDSOMMARAFTON,
                date: new MidsummerDependentDate(-1),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.MIDSOMMARDAGEN,
                date: new MidsummerDependentDate(0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.SONDAG_EFTER_MIDSOMMAR,
                date: new MidsummerDependentDate(+1),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.ALLHELGONAAFTON,
                date: new AllHallowsDependentDate(-1),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.ALLA_HELGONS_DAG,
                date: new AllHallowsDependentDate(0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.DAGEN_FORE_JULAFTON,
                date: new RecurringDate(23, 11),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.JULAFTON,
                date: new RecurringDate(24, 11),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.JULDAGEN,
                date: new RecurringDate(25, 11),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.ANNANDAG_JUL,
                date: new RecurringDate(26, 11),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.allmanna_helgdagar_1989_253),
                    new SpecialSurchargeDayTag(),
                ],
            },
            {
                name: HolidayName.NYARSAFTON,
                date: new RecurringDate(31, 11),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivavtal),
                    new SpecialSurchargeDayTag(),
                    new LateTag(),
                ],
            },
        ];
    }
}
