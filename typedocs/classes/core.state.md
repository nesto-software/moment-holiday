[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [State](../classes/core.state.md)

# Class: State

## Hierarchy

 [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)

**↳ State**

## Index

### Constructors

* [constructor](core.state.md#constructor)

### Methods

* [getAbbreviation](core.state.md#getabbreviation)
* [getHolidayDefinitions](core.state.md#getholidaydefinitions)
* [getName](core.state.md#getname)
* [getRegions](core.state.md#getregions)
* [tagHolidayDefinition](core.state.md#tagholidaydefinition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new State**(name: *`string`*, abbreviation: *`string`*, locale: *[AbstractLocale](core.abstractlocale.md)*, containingRegions?: *[Region](core.region.md)[]*): [State](core.state.md)

*Overrides [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[constructor](core.abstractadministrativeunit.md#constructor)*

*Defined in [packages/core/src/state.ts:8](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/state.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| abbreviation | `string` |
| locale | [AbstractLocale](core.abstractlocale.md) |
| `Optional` containingRegions | [Region](core.region.md)[] |

**Returns:** [State](core.state.md)

___

## Methods

<a id="getabbreviation"></a>

###  getAbbreviation

▸ **getAbbreviation**(): `string`

*Inherited from [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[getAbbreviation](core.abstractadministrativeunit.md#getabbreviation)*

*Defined in [packages/core/src/abstract-administrative-unit.ts:14](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L14)*

**Returns:** `string`

___
<a id="getholidaydefinitions"></a>

###  getHolidayDefinitions

▸ **getHolidayDefinitions**(): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]

*Inherited from [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[getHolidayDefinitions](core.abstractadministrativeunit.md#getholidaydefinitions)*

*Defined in [packages/core/src/abstract-administrative-unit.ts:18](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L18)*

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Inherited from [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[getName](core.abstractadministrativeunit.md#getname)*

*Defined in [packages/core/src/abstract-administrative-unit.ts:10](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L10)*

**Returns:** `string`

___
<a id="getregions"></a>

###  getRegions

▸ **getRegions**(): [Region](core.region.md)[]

*Defined in [packages/core/src/state.ts:26](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/state.ts#L26)*

**Returns:** [Region](core.region.md)[]

___
<a id="tagholidaydefinition"></a>

###  tagHolidayDefinition

▸ **tagHolidayDefinition**(holidayDefinition: *[IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)*): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

*Overrides [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[tagHolidayDefinition](core.abstractadministrativeunit.md#tagholidaydefinition)*

*Defined in [packages/core/src/state.ts:30](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/state.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayDefinition | [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md) |

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

___

