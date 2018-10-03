[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [AbstractAdministrativeUnit](../classes/core.abstractadministrativeunit.md)

# Class: AbstractAdministrativeUnit

## Hierarchy

**AbstractAdministrativeUnit**

↳  [Region](core.region.md)

↳  [State](core.state.md)

## Index

### Constructors

* [constructor](core.abstractadministrativeunit.md#constructor)

### Methods

* [getAbbreviation](core.abstractadministrativeunit.md#getabbreviation)
* [getHolidayDefinitions](core.abstractadministrativeunit.md#getholidaydefinitions)
* [getName](core.abstractadministrativeunit.md#getname)
* [tagHolidayDefinition](core.abstractadministrativeunit.md#tagholidaydefinition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AbstractAdministrativeUnit**(name: *`string`*, abbreviation: *`string`*, locale: *[AbstractLocale](core.abstractlocale.md)*): [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)

*Defined in [packages/core/src/abstract-administrative-unit.ts:4](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L4)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| abbreviation | `string` |
| locale | [AbstractLocale](core.abstractlocale.md) |

**Returns:** [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)

___

## Methods

<a id="getabbreviation"></a>

###  getAbbreviation

▸ **getAbbreviation**(): `string`

*Defined in [packages/core/src/abstract-administrative-unit.ts:14](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L14)*

**Returns:** `string`

___
<a id="getholidaydefinitions"></a>

###  getHolidayDefinitions

▸ **getHolidayDefinitions**(): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]

*Defined in [packages/core/src/abstract-administrative-unit.ts:18](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L18)*

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [packages/core/src/abstract-administrative-unit.ts:10](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L10)*

**Returns:** `string`

___
<a id="tagholidaydefinition"></a>

### `<Abstract>` tagHolidayDefinition

▸ **tagHolidayDefinition**(holidayDefinition: *[IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)*): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

*Defined in [packages/core/src/abstract-administrative-unit.ts:22](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayDefinition | [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md) |

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

___

