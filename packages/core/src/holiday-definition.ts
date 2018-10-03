import { AbstractDate } from "./date/abstract-date";
import { AbstractTag } from "./tag/abstract-tag";

export class HolidayDefinition {
    private readonly _tags: Map<string, AbstractTag> = new Map<string, AbstractTag>();

    public constructor(
        private readonly _name: string,
        private readonly _date: AbstractDate,
        tags: AbstractTag[] | undefined,
    ) {

        if (tags) {
            for (const tag of tags) {
                this._tags.set(tag.constructor.name, tag);
            }
        }
    }

    /**
     * The name of the holiday.
     * Must be unique.
     * This value is used to do duplicate detection when merging holidays
     * from different sources (such as different states).
     */
    get name(): string {
        return this._name;
    }

    /**
     * The date of the holiday.
     */
    get date(): AbstractDate {
        return this._date;
    }

    /**
     * Additional information concerning the holiday.
     */
    get tags(): ReadonlyMap<string, AbstractTag> {
        return this._tags;
    }
}
