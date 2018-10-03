import {
    AbstractHolidayDefinitionFactory,
    Country,
    Region,
    State,
} from "@nesto-software/moment-holiday-core";
import { AUGRegionLocale } from "./locale/aug.region-locale";
import { BBStateLocale } from "./locale/bb.state-locale";
import { BEStateLocale } from "./locale/be.state-locale";
import { BWStateLocale } from "./locale/bw.state-locale";
import { BYCatholicRegionLocale } from "./locale/by-catholic.region-locale";
import { BYStateLocale } from "./locale/by.state-locale";
import { GermanCountryLocale } from "./locale/country-locale";
import { HBStateLocale } from "./locale/hb.state-locale";
import { HEStateLocale } from "./locale/he.state-locale";
import { HHStateLocale } from "./locale/hh.state-locale";
import { MVStateLocale } from "./locale/mv.state-locale";
import { NIStateLocale } from "./locale/ni.state-locale";
import { NWStateLocale } from "./locale/nw.state-locale";
import { RPStateLocale } from "./locale/rp.state-locale";
import { SHStateLocale } from "./locale/sh.state-locale";
import { SLStateLocale } from "./locale/sl.state-locale";
import { SNCatholicRegionLocale } from "./locale/sn-catholic.region-locale";
import { SNStateLocale } from "./locale/sn.state-locale";
import { STStateLocale } from "./locale/st.state-locale";
import { THCatholicRegionLocale } from "./locale/th-catholic.region-locale";
import { THStateLocale } from "./locale/th.state-locale";

/**
 * Creates holiday definitions for germany.
 */
export class GermanHolidayDefinitionFactory extends AbstractHolidayDefinitionFactory {
    private static readonly COUNTRY_NAME: GermanCountryName = "Germany";
    private static readonly COUNTRY_ABBREVIATION: GermanCountryAbbrevition = "DE";

    public getCountryName(): string {
        return GermanHolidayDefinitionFactory.COUNTRY_NAME;
    }

    public getCountryAbbreviation(): string {
        return GermanHolidayDefinitionFactory.COUNTRY_ABBREVIATION;
    }

    public createCountry(): Country {
        return new Country(
            GermanHolidayDefinitionFactory.COUNTRY_NAME,
            GermanHolidayDefinitionFactory.COUNTRY_ABBREVIATION,
            [
                new State("Baden-Württemberg", "BW", new BWStateLocale()),
                new State("Bayern", "BY", new BYStateLocale(), [
                    new Region("Augsburg", "BY_AUG", new AUGRegionLocale()),
                    new Region("Überwiegend katholische Gemeinden", "BY_CATHOLIC", new BYCatholicRegionLocale()),
                ]),
                new State("Sachsen-Anhalt", "ST", new STStateLocale()),
                new State("Thüringen", "TH", new THStateLocale(), [
                    new Region("Überwiegend katholische Gemeinden", "TH_CATHOLIC", new THCatholicRegionLocale()),
                ]),
                new State("Nordrhein-Westfalen", "NW", new NWStateLocale()),
                new State("Berlin", "BE", new BEStateLocale()),
                new State("Hamburg", "HH", new HHStateLocale()),
                new State("Mecklenburg-Vorpommern", "MV", new MVStateLocale()),
                new State("Brandenburg", "BB", new BBStateLocale()),
                new State("Bremen", "HB", new HBStateLocale()),
                new State("Hessen", "HE", new HEStateLocale()),
                new State("Niedersachsen", "NI", new NIStateLocale()),
                new State("Rheinland-Pfalz", "RP", new RPStateLocale()),
                new State("Saarland", "SL", new SLStateLocale()),
                new State("Sachsen", "SN", new SNStateLocale(), [
                    new Region("Überwiegend katholische Gemeinden", "SN_CATHOLIC", new SNCatholicRegionLocale()),
                ]),
                new State("Schleswig-Holstein", "SH", new SHStateLocale()),
            ],
            new GermanCountryLocale(),
        );
    }
}

export type GermanCountryName = "Germany";
export type GermanCountryAbbrevition = "DE";
export type GermanStateAbbreviation = "BW" | "BY" | "ST" | "TH" | "NW" | "BE"
    | "HH" | "MV" | "BB" | "HB" | "HE" | "NI" | "RP" | "SL" | "SN" | "SH";
export type GermanRegionAbbreviation = "BY_AUG" | "BY_CATHOLIC" | "TH_CATHOLIC" | "SN_CATHOLIC";
