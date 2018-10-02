import { AbstractTag } from "./abstract-tag";

export class EnumTag extends AbstractTag {
    constructor(private readonly _value: any) {
        super();
    }

    get value() {
        return this._value;
    }
}
