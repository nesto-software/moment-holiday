[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [MomentHolidayUtils](../classes/core.momentholidayutils.md)

# Class: MomentHolidayUtils

A utility class for moment holiday.

## Hierarchy

**MomentHolidayUtils**

## Index

### Methods

* [mergeHolidayDefinitions](core.momentholidayutils.md#mergeholidaydefinitions)

---

## Methods

<a id="mergeholidaydefinitions"></a>

### `<Static>` mergeHolidayDefinitions

▸ **mergeHolidayDefinitions**(definitions: *[HolidayDefinition](core.holidaydefinition.md)[]*, moreDefinitions: *[HolidayDefinition](core.holidaydefinition.md)[]*, ...evenMoreDefinitions: *[HolidayDefinition](core.holidaydefinition.md)[][]*): [HolidayDefinition](core.holidaydefinition.md)[]

*Defined in [packages/core/src/utils.ts:20](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/utils.ts#L20)*

Merge two arrays of holiday definitions. Please note: the second parameter takes precendce over the first one because values are ovewritten If evenMoreDefinitions are given then they take precedence over the second parameter. The holidayDefinitions with the higher index in evenMoreDefinitions take precedence.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| definitions | [HolidayDefinition](core.holidaydefinition.md)[] |  the first array to merge |
| moreDefinitions | [HolidayDefinition](core.holidaydefinition.md)[] |  the second array to merge; it takes precedence over definitions (for duplicates) |
| `Rest` evenMoreDefinitions | [HolidayDefinition](core.holidaydefinition.md)[][] |  more arrays to merge; it takes precedence over the 1st and 2nd param (for duplicates) |

**Returns:** [HolidayDefinition](core.holidaydefinition.md)[]
an array which basically is a set with the contents of all given arrays

___

