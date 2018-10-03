[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [Region](../classes/core.region.md)

# Class: Region

## Hierarchy

 [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)

**↳ Region**

## Index

### Constructors

* [constructor](core.region.md#constructor)

### Methods

* [addStateTag](core.region.md#addstatetag)
* [getAbbreviation](core.region.md#getabbreviation)
* [getHolidayDefinitions](core.region.md#getholidaydefinitions)
* [getName](core.region.md#getname)
* [tagHolidayDefinition](core.region.md#tagholidaydefinition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Region**(name: *`string`*, abbreviation: *`string`*, locale: *[AbstractLocale](core.abstractlocale.md)*): [Region](core.region.md)

*Inherited from [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[constructor](core.abstractadministrativeunit.md#constructor)*

*Defined in [packages/core/src/abstract-administrative-unit.ts:4](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-administrative-unit.ts#L4)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| abbreviation | `string` |
| locale | [AbstractLocale](core.abstractlocale.md) |

**Returns:** [Region](core.region.md)

___

## Methods

<a id="addstatetag"></a>

###  addStateTag

▸ **addStateTag**(stateTag: *[StateTag](core.statetag.md)*): `void`

*Defined in [packages/core/src/region.ts:12](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/region.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| stateTag | [StateTag](core.statetag.md) |

**Returns:** `void`

___
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
<a id="tagholidaydefinition"></a>

###  tagHolidayDefinition

▸ **tagHolidayDefinition**(holidayDefinition: *[IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)*): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

*Overrides [AbstractAdministrativeUnit](core.abstractadministrativeunit.md).[tagHolidayDefinition](core.abstractadministrativeunit.md#tagholidaydefinition)*

*Defined in [packages/core/src/region.ts:16](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/region.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayDefinition | [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md) |

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

___

