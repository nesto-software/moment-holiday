import { BooleanTag } from "@nesto-software/moment-holiday-core";

// You may want to create your own tag in order to group holidays.
// There are different subclasses of AbstractTag.
// The following is a simple marker tag:
export class YOUR_TAG extends BooleanTag {
    constructor() {
        super("<YOUR_TAG>");
    }
}
