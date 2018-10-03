import { AbstractDate } from "./date/abstract-date";
import { AbstractTag } from "./tag/abstract-tag";

/**
 * This interface is the non-readonly version of IHolidayDefinition.
 * It is used to manipulate the tags in the moment-holiday engine internally.
 */
export interface IHolidayDefinitionInternal {
    readonly name: string;
    readonly date: AbstractDate;

    // making this optional is convenience for expressing definitions
    tags?: AbstractTag[];
}
