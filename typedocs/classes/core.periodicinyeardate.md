[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [PeriodicInYearDate](../classes/core.periodicinyeardate.md)

# Class: PeriodicInYearDate

Creates a date which might resolve multiple times per year.

## Hierarchy

 [AbstractDate](core.abstractdate.md)

**↳ PeriodicInYearDate**

## Index

### Methods

* [resolve](core.periodicinyeardate.md#resolve)
* [withResolver](core.periodicinyeardate.md#withresolver)

---

## Methods

<a id="resolve"></a>

###  resolve

▸ **resolve**(year: *`number`*): `any`

*Overrides [AbstractDate](core.abstractdate.md).[resolve](core.abstractdate.md#resolve)*

*Defined in [packages/core/src/date/periodic-in-year-date.ts:23](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/periodic-in-year-date.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |

**Returns:** `any`

___
<a id="withresolver"></a>

### `<Static>` withResolver

▸ **withResolver**(resolverFn: *`function`*): [PeriodicInYearDate](core.periodicinyeardate.md)

*Defined in [packages/core/src/date/periodic-in-year-date.ts:17](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/periodic-in-year-date.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| resolverFn | `function` |

**Returns:** [PeriodicInYearDate](core.periodicinyeardate.md)

___

