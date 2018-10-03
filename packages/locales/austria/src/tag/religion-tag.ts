import { MultivalueTag } from "@nesto-software/moment-holiday-core";

/**
 * Indicates that the holiday is only applicable for people with one of the given
 * religions.
 */
export class ReligionTag extends MultivalueTag<Religion> {
    constructor(private readonly _religionOrReligions: Religion | Religion[]) {
        super(_religionOrReligions);
    }
}

export enum Religion {
    ENVANGELISCH_AB = "Evangelische Kirche A.B.",
    ENVANGELISCH_HB = "Evangelische Kirche H.B.",
    ALTKATHOLISCHE_KIRCHE = "Altkatholische Kirche",
    EVANGELISCH_METHODISTISCH = "Evangelisch-methodistischen Kirche",
}
