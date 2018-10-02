import { Moment } from "moment";
import { HolidayDefinition } from "./holiday-definition";
import { AbstractTag } from "./tag/abstract-tag";
import { BooleanTag } from "./tag/boolean-tag";
import { EnumTag } from "./tag/enum-tag";
import { MultivalueTag } from "./tag/multivalue-tag";

export class Holiday {
    constructor(private readonly resolvedDate: Moment, private readonly holidayDefinition: HolidayDefinition) { }

    /**
     * Returns a moment which represents the start of the holiday.
     * The start of the holiday is always 0 o'clock.
     *
     * @returns the moment representation of the holiday
     */
    get moment() {
        return this.resolvedDate;
    }

    /**
     * Return the tag with the given key.
     * @param key the key to look up
     * @returns a tag with given key or undefined if none is found
     */
    public getTag<T extends AbstractTag>(key: new (...args: any[]) => T): T | undefined {
        return this.holidayDefinition.tags.get(key.name) as T | undefined;   //  a heterogeneous typesafe container
    }

    /**
     * Returns true if a tag with given key exists.
     * As BooleanTag does not contain any value, a user can only check for its existance.
     * @param key the key to search for.
     * @returns true if a tag with given key exists
     */
    public isTagged<T extends BooleanTag>(key: new (...args: any[]) => T): boolean;

    /**
     * Returns true if a tag with given key and value exists.
     * @param key the key to search for
     * @param value the value to check if the tag exists
     * @returns true if a tag with given key exists and the tag's value matches the given value
     */
    public isTagged<T extends EnumTag>(key: new (...args: any[]) => T, value: any): boolean;

    /**
     * Returns true if a tag with given key exists and the tag's values contain all of the given values.
     * @param key the key to search for
     * @param valueOrValues if it is an array then all values must be contained in the tag, otherwise values must match
     * @returns true if a tag with given key exists and the tag's values contain all of the given values
     */
    public isTagged<R, T extends MultivalueTag<R>>(key: new (...args: any[]) => T, valueOrValues: R | R[]): boolean;

    /**
     * Checks if a tag with the given key exists.
     *
     * If a value is given and the tag exists and contains values, it checks whether the value
     * is contained by the tag.
     *
     * @returns true if a tag with given key (and value exists)
     */
    public isTagged<T extends AbstractTag>(key: new (...args: any[]) => T, value?: any): boolean {
        const tag = this.getTag(key);

        if (tag === undefined) {
            return false;
        } else if (tag instanceof EnumTag && value !== undefined) {
            return tag.value === value;
        } else if (tag instanceof MultivalueTag && value !== undefined) {
            if (value instanceof Array) {
                for (const v of value) {
                    // for each requested value, we must search the tag to find the value in it
                    if (tag.values.find((v2) => v === v2) === undefined) {
                        return false;
                    }
                }
            } else {
                return tag.values.find((v) => v === value) !== undefined;
            }
        }

        return true;
    }

    /**
     * Returns an iterator over all available tags.
     *
     * @returns the holiday's tags
     */
    public getTags() {
        return this.holidayDefinition.tags.values();
    }

    /**
     * Returns the name of the holiday.
     * The name is always a unique identifier within a locale package.
     *
     * @return the holiday name
     */
    get name() {
        return this.holidayDefinition.name;
    }
}
