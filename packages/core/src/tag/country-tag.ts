import { EnumTag } from "./enum-tag";

export class CountryTag extends EnumTag {
    constructor(private readonly _country: string) {
        super(_country);
    }

    get value() {
        return this._country;
    }
}
