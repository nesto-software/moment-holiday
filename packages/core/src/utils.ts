import { GeneralSet } from "./helper/general-set";
import { HolidayDefinition } from "./holiday-definition";

/**
 * A utility class for moment holiday.
 */
export class MomentHolidayUtils {

    /**
     * Merge two arrays of holiday definitions.
     * Please note: the second parameter takes precendce over the first one because values are ovewritten
     * If evenMoreDefinitions are given then they take precedence over the second parameter.
     * The holidayDefinitions with the higher index in evenMoreDefinitions take precedence.
     *
     * @param definitions the first array to merge
     * @param moreDefinitions the second array to merge; it takes precedence over definitions (for duplicates)
     * @param evenMoreDefinitions more arrays to merge; it takes precedence over the 1st and 2nd param (for duplicates)
     * @returns an array which basically is a set with the contents of all given arrays
     */
    public static mergeHolidayDefinitions(definitions: HolidayDefinition[],
        moreDefinitions: HolidayDefinition[], ...evenMoreDefinitions: HolidayDefinition[][]): HolidayDefinition[] {
        const set = new GeneralSet<HolidayDefinition>();
        set.add(...definitions);
        set.add(...moreDefinitions);

        for (const additionalDefinitionsArray of evenMoreDefinitions) {
            set.add(...additionalDefinitionsArray);
        }

        return Array.from(set.values());
    }
}
