import { EnumTag } from "./enum-tag";

export class RegionTag extends EnumTag {
    constructor(private readonly _region: string) {
        super(_region);
    }

    get value() {
        return this._region;
    }
}
