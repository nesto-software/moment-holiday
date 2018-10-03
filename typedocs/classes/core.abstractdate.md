[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [AbstractDate](../classes/core.abstractdate.md)

# Class: AbstractDate

## Hierarchy

**AbstractDate**

↳  [EasterDependentDate](core.easterdependentdate.md)

↳  [NonRecurringDate](core.nonrecurringdate.md)

↳  [PeriodicInYearDate](core.periodicinyeardate.md)

↳  [RecurringDate](core.recurringdate.md)

## Index

### Methods

* [resolve](core.abstractdate.md#resolve)

---

## Methods

<a id="resolve"></a>

### `<Abstract>` resolve

▸ **resolve**(year: *`number`*):  [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)[] &#124; [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) &#124; `null`

*Defined in [packages/core/src/date/abstract-date.ts:12](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/abstract-date.ts#L12)*

Computes the moment timestamp for the date. The moment must have its day, month and year set. The implementation expects the other moment values to be 0.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  the year this date is placed in |

**Returns:**  [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)[] &#124; [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) &#124; `null`

a moment containing day, month and year attributes which are set for the specific year

___

