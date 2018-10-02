import { BooleanTag } from "./boolean-tag";

/**
 * Indicates that a holiday starts late.
 * That means, that staff that works late on this day must usually be payed surcharges.
 */
export class LateTag extends BooleanTag {
    constructor() {
        super();
    }
}
