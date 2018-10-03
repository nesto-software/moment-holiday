import { AbstractTag } from "./abstract-tag";

export class MultivalueTag<T> extends AbstractTag {
    private readonly _values: T[] = [];

    constructor(_aValueOrValues: T | T[]) {
        super();

        if (_aValueOrValues instanceof Array) {
            this._values.push(..._aValueOrValues);
        } else {
            this._values.push(_aValueOrValues);
        }
    }

    public addValue(value: T) {
        this._values.push(value);
    }

    get values() {
        return this._values;
    }
}
