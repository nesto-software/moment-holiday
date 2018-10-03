[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [EasterDependentDate](../classes/core.easterdependentdate.md)

# Class: EasterDependentDate

## Hierarchy

 [AbstractDate](core.abstractdate.md)

**↳ EasterDependentDate**

## Index

### Constructors

* [constructor](core.easterdependentdate.md#constructor)

### Methods

* [resolve](core.easterdependentdate.md#resolve)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EasterDependentDate**(offset: *`number`*): [EasterDependentDate](core.easterdependentdate.md)

*Defined in [packages/core/src/date/easter-dependent-date.ts:8](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/easter-dependent-date.ts#L8)*

Create a new easter dependent date.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| offset | `number` |  number of days before or after easter - positive number means after, negative number before easter |

**Returns:** [EasterDependentDate](core.easterdependentdate.md)

___

## Methods

<a id="resolve"></a>

###  resolve

▸ **resolve**(year: *`number`*): [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)

*Overrides [AbstractDate](core.abstractdate.md).[resolve](core.abstractdate.md#resolve)*

*Defined in [packages/core/src/date/easter-dependent-date.ts:18](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/date/easter-dependent-date.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |

**Returns:** [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)

___

