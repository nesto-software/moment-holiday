import { BooleanTag } from "./boolean-tag";

/**
 * Indicates that a holiday is a client specific one.
 * That means, that its definition was loaded from database.
 */
export class UserDefinedTag extends BooleanTag {
    constructor() {
        super();
    }
}
