import { BooleanTag } from "./boolean-tag";

/**
 * Indicates that a holiday is payed differently in gastro.
 * Defined by https://www.bundesverband-systemgastronomie.de/de/.
 */
export class SpecialSurchargeDayTag extends BooleanTag {
    constructor() {
        super();
    }
}
