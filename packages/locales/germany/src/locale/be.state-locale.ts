import {
    AbstractLocale,
    IHolidayDefinitionInternal,
    Legislation,
} from "@nesto-software/moment-holiday-core";
import * as url from "url";
import { COMMON_STATE_HOLIDAY_DEFINITIONS } from "./common-state-holiday-definitions";

export class BEStateLocale extends AbstractLocale {
    private readonly legislation = new Legislation(
        "Gesetz über die Sonn- und Feiertage",
        // tslint:disable-next-line:max-line-length
        url.parse("http://gesetze.berlin.de/jportal/?quelle=jlink&query=FeiertG+BE+%C2%A7+1&psml=bsbeprod.psml&max=true"),
        "§1 Abs. 1",
    );

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return COMMON_STATE_HOLIDAY_DEFINITIONS(this.legislation);
    }
}
