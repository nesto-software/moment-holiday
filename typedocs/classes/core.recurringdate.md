[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [RecurringDate](../classes/core.recurringdate.md)

# Class: RecurringDate

A recurring date is basically a date which is relative to the start of a given year. It is used for holidays which happen repeatedly at the same month and day in a year.

## Hierarchy

 [AbstractDate](core.abstractdate.md)

**↳ RecurringDate**

## Index

### Constructors

* [constructor](core.recurringdate.md#constructor)

### Methods

* [resolve](core.recurringdate.md#resolve)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RecurringDate**(day: *`number`*, month: *`number`*): [RecurringDate](core.recurringdate.md)

*Defined in [packages/core/src/date/recurring-date.ts:8](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/recurring-date.ts#L8)*

Create a new standard date.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| day | `number` |  the day in the given month - 1-31 |
| month | `number` |  the month - 0-11 (zero based!!) |

**Returns:** [RecurringDate](core.recurringdate.md)

___

## Methods

<a id="resolve"></a>

###  resolve

▸ **resolve**(year: *`number`*): `any`

*Overrides [AbstractDate](core.abstractdate.md).[resolve](core.abstractdate.md#resolve)*

*Defined in [packages/core/src/date/recurring-date.ts:18](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/recurring-date.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |

**Returns:** `any`

___

