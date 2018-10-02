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
import { Religion, ReligionTag } from "../tag/religion-tag";
import { HolidayName } from "./holiday-names";

export class AustrianCountryLocale extends AbstractLocale {
    private readonly arbeitsruhegesetzS2 = new Legislation(
        "Arbeitsruhegesetz",
        url.parse("https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40060439"),
        "§7 (2)",
    );

    private readonly arbeitsruhegesetzS3 = new Legislation(
        "Arbeitsruhegesetz",
        url.parse("https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40060439"),
        "§7 (3)",
    );

    private readonly kollektivvertrag = new Legislation(
        "Kollektivvertag",  // there a lots of so called "Kollektivverträge" between emloyers and employees
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return [
            {
                name: HolidayName.NEUJAHR,
                date: new RecurringDate(1, 0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.HEILIGE_DREI_KOENIGE,
                date: new RecurringDate(6, 0),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.KARFREITAG,
                date: new EasterDependentDate(-2),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS3),
                    new ReligionTag([
                        Religion.ALTKATHOLISCHE_KIRCHE,
                        Religion.ENVANGELISCH_AB,
                        Religion.ENVANGELISCH_HB,
                        Religion.EVANGELISCH_METHODISTISCH,
                    ]),
                ],
            },
            {
                name: HolidayName.OSTERMONTAG,
                date: new EasterDependentDate(+1),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.STAATSFEIERTAG,
                date: new RecurringDate(1, 4),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.CHRISTI_HIMMELFAHRT,
                date: new EasterDependentDate(+39),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.PFINGSTMONTAG,
                date: new EasterDependentDate(+50),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.FRONLEICHNAM,
                date: new EasterDependentDate(+60),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.MARIA_HIMMELFAHRT,
                date: new RecurringDate(15, 7),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.NATIONALFEIERTAG,
                date: new RecurringDate(26, 9),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.ALLERHEILIGEN,
                date: new RecurringDate(1, 10),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.MARIA_EMPFAENGNIS,
                date: new RecurringDate(8, 11),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.HEILIGER_ABEND,
                date: new RecurringDate(24, 11),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivvertrag),
                    new SpecialSurchargeDayTag(),
                    new LateTag(),
                ],
            },
            {
                name: HolidayName.WEIHNACHTEN,
                date: new RecurringDate(25, 11),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.STEPHANSTAG,
                date: new RecurringDate(26, 11),
                tags: [
                    new TypeTag(TypeTagValue.PUBLIC),
                    new LegislationTag(this.arbeitsruhegesetzS2),
                ],
            },
            {
                name: HolidayName.SILVESTER,
                date: new RecurringDate(31, 11),
                tags: [
                    new TypeTag(TypeTagValue.OBSERVANCE),
                    new LegislationTag(this.kollektivvertrag),
                    new SpecialSurchargeDayTag(),
                    new LateTag(),
                ],
            },
        ];
    }
}
