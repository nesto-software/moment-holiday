[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [Country](../classes/core.country.md)

# Class: Country

## Hierarchy

**Country**

## Index

### Constructors

* [constructor](core.country.md#constructor)

### Methods

* [getAbbreviation](core.country.md#getabbreviation)
* [getAdministrativeUnit](core.country.md#getadministrativeunit)
* [getAdministrativeUnits](core.country.md#getadministrativeunits)
* [getCountryHolidayDefinitions](core.country.md#getcountryholidaydefinitions)
* [getName](core.country.md#getname)
* [tagHolidayDefinition](core.country.md#tagholidaydefinition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Country**(name: *`string`*, abbreviation: *`string`*, administrativeUnits: *[AbstractAdministrativeUnit](core.abstractadministrativeunit.md)[]*, locale: *[AbstractLocale](core.abstractlocale.md)*): [Country](core.country.md)

*Defined in [packages/core/src/country.ts:12](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| abbreviation | `string` |
| administrativeUnits | [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)[] |
| locale | [AbstractLocale](core.abstractlocale.md) |

**Returns:** [Country](core.country.md)

___

## Methods

<a id="getabbreviation"></a>

###  getAbbreviation

▸ **getAbbreviation**(): `string`

*Defined in [packages/core/src/country.ts:38](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L38)*

**Returns:** `string`

___
<a id="getadministrativeunit"></a>

###  getAdministrativeUnit

▸ **getAdministrativeUnit**(unitAbbreviation: *`string`*): [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)

*Defined in [packages/core/src/country.ts:46](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| unitAbbreviation | `string` |

**Returns:** [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)

___
<a id="getadministrativeunits"></a>

###  getAdministrativeUnits

▸ **getAdministrativeUnits**(): [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)[]

*Defined in [packages/core/src/country.ts:42](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L42)*

**Returns:** [AbstractAdministrativeUnit](core.abstractadministrativeunit.md)[]

___
<a id="getcountryholidaydefinitions"></a>

###  getCountryHolidayDefinitions

▸ **getCountryHolidayDefinitions**(): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]

*Defined in [packages/core/src/country.ts:55](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L55)*

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [packages/core/src/country.ts:34](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L34)*

**Returns:** `string`

___
<a id="tagholidaydefinition"></a>

###  tagHolidayDefinition

▸ **tagHolidayDefinition**(holidayDefinition: *[IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)*, TagType: *`object`*): [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

*Defined in [packages/core/src/country.ts:60](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/country.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayDefinition | [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md) |
| TagType | `object` |

**Returns:** [IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)

___

