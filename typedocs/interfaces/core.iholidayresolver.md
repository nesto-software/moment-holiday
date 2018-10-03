[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [IHolidayResolver](../interfaces/core.iholidayresolver.md)

# Interface: IHolidayResolver

Resolves given holiday definitions to holiday objects for a given date range.

## Hierarchy

**IHolidayResolver**

## Implemented by

* [HolidayResolver](../classes/core.holidayresolver.md)

## Index

### Methods

* [resolve](core.iholidayresolver.md#resolve)

---

## Methods

<a id="resolve"></a>

###  resolve

▸ **resolve**(queryRange: *`DateRange`*, holidayDefinitions: *[HolidayDefinition](../classes/core.holidaydefinition.md)[]*, options?: *[IDateRangeOptions](core.idaterangeoptions.md)*): [HolidayArray](../classes/core.holidayarray.md)<[Holiday](../classes/core.holiday.md)>

*Defined in [packages/core/src/holiday-resolver.interface.ts:23](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday-resolver.interface.ts#L23)*

Computes all holidays within the given query range. It uses the holiday definitions passed. You can specify whether query range bounds are exclusive or not. They are inclusive by default.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| queryRange | `DateRange` |  the query range which is used to filter the output, expects the range to be snapped to days |
| holidayDefinitions | [HolidayDefinition](../classes/core.holidaydefinition.md)[] |  the holiday definitions to use for the computation |
| `Optional` options | [IDateRangeOptions](core.idaterangeoptions.md) |

**Returns:** [HolidayArray](../classes/core.holidayarray.md)<[Holiday](../classes/core.holiday.md)>

___

