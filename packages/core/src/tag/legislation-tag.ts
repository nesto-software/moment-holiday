import { Legislation } from "../legislation";
import { EnumTag } from "./enum-tag";

export class LegislationTag extends EnumTag {
    constructor(private readonly _legislation: Legislation) {
        super(_legislation);
    }

    get value() {
        return this._legislation;
    }
}
