[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [NonRecurringDate](../classes/core.nonrecurringdate.md)

# Class: NonRecurringDate

Creates a date which resolves in some years only. This can be used to create a holiday in a single year only.

## Hierarchy

 [AbstractDate](core.abstractdate.md)

**↳ NonRecurringDate**

## Index

### Methods

* [resolve](core.nonrecurringdate.md#resolve)
* [forPredicate](core.nonrecurringdate.md#forpredicate)
* [forYears](core.nonrecurringdate.md#foryears)

---

## Methods

<a id="resolve"></a>

###  resolve

▸ **resolve**(year: *`number`*): `any`

*Overrides [AbstractDate](core.abstractdate.md).[resolve](core.abstractdate.md#resolve)*

*Defined in [packages/core/src/date/non-recurring-date.ts:31](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/non-recurring-date.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |

**Returns:** `any`

___
<a id="forpredicate"></a>

### `<Static>` forPredicate

▸ **forPredicate**(day: *`number`*, month: *`number`*, yearPredicate: *`function`*): [NonRecurringDate](core.nonrecurringdate.md)

*Defined in [packages/core/src/date/non-recurring-date.ts:23](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/non-recurring-date.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| day | `number` |
| month | `number` |
| yearPredicate | `function` |

**Returns:** [NonRecurringDate](core.nonrecurringdate.md)

___
<a id="foryears"></a>

### `<Static>` forYears

▸ **forYears**(day: *`number`*, month: *`number`*, years: *`number`[]*): [NonRecurringDate](core.nonrecurringdate.md)

*Defined in [packages/core/src/date/non-recurring-date.ts:27](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/non-recurring-date.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| day | `number` |
| month | `number` |
| years | `number`[] |

**Returns:** [NonRecurringDate](core.nonrecurringdate.md)

___

