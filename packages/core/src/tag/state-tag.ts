import { EnumTag } from "./enum-tag";

export class StateTag extends EnumTag {
    constructor(private readonly _state: string) {
        super(_state);
    }

    get value() {
        return this._state;
    }
}
