import { EnumTag } from "./enum-tag";

/**
 * Whether the holiday is defined by public law, i.e. law that is applicable to
 * everyone.
 */
export class TypeTag extends EnumTag {
    constructor(private readonly _type: TypeTagValue) {
        super(_type);
    }

    get value() {
        return this._type;
    }
}

export enum TypeTagValue {
    /**
     * Defined by law for everyone.
     */
    PUBLIC,

    /**
     * Not defined by law or only by law for specific employees.
     * For the latter case, use the special holiday tag (e.g. the special gastro holiday tag).
     */
    OBSERVANCE,
}
