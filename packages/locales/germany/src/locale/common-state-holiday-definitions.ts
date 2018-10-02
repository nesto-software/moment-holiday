import {
    EasterDependentDate,
    IHolidayDefinitionInternal,
    LateTag,
    Legislation,
    LegislationTag,
    RecurringDate,
    SpecialSurchargeDayTag,
    TypeTag,
    TypeTagValue,
} from "@nesto-software/moment-holiday-core";
import { HolidayName } from "./holiday-names";

/**
 * Returns holiday definitions which are usually common for all german states.
 * However, they are defined per state. That is why each state locale returns them.
 * @param legislation the legislation of the state which defines this common holiday definitions itself
 */
export const COMMON_STATE_HOLIDAY_DEFINITIONS = (legislation: Legislation): IHolidayDefinitionInternal[] => {
    return [{
        name: HolidayName.NEUJAHRSTAG,
        date: new RecurringDate(1, 0),
        tags: [
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    {
        name: HolidayName.KARFREITAG,
        date: new EasterDependentDate(-2),
        tags: [
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    {
        name: HolidayName.OSTERMONTAG,
        date: new EasterDependentDate(+1),
        tags: [
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    {
        name: HolidayName.MAIFEIERTAG,
        date: new RecurringDate(1, 4),
        tags: [
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
            new SpecialSurchargeDayTag(),
        ],
    },
    {
        name: HolidayName.CHRISTI_HIMMELFAHRT,
        date: new EasterDependentDate(+39),
        tags: [
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    {
        name: HolidayName.PFINGSTMONTAG,
        date: new EasterDependentDate(+50),
        tags: [
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    {
        name: HolidayName.WEIHNACHTEN,
        date: new RecurringDate(24, 11),
        tags: [
            new SpecialSurchargeDayTag(),
            new LateTag(),
            new TypeTag(TypeTagValue.OBSERVANCE),
        ],
    },
    {
        name: HolidayName.ERSTER_WEIHNACHTSFEIERTAG,
        date: new RecurringDate(25, 11),
        tags: [
            new SpecialSurchargeDayTag(),
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    {
        name: HolidayName.ZWEITER_WEIHNACHTSFEIERTAG,
        date: new RecurringDate(26, 11),
        tags: [
            new SpecialSurchargeDayTag(),
            new TypeTag(TypeTagValue.PUBLIC),
            new LegislationTag(legislation),
        ],
    },
    ];
};
