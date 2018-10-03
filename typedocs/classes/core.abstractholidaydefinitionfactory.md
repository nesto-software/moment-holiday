[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [AbstractHolidayDefinitionFactory](../classes/core.abstractholidaydefinitionfactory.md)

# Class: AbstractHolidayDefinitionFactory

## Hierarchy

**AbstractHolidayDefinitionFactory**

## Index

### Methods

* [getCountry](core.abstractholidaydefinitionfactory.md#getcountry)
* [getCountryAbbreviation](core.abstractholidaydefinitionfactory.md#getcountryabbreviation)
* [getCountryName](core.abstractholidaydefinitionfactory.md#getcountryname)
* [getDefinitions](core.abstractholidaydefinitionfactory.md#getdefinitions)
* [getDefinitionsWithDatabase](core.abstractholidaydefinitionfactory.md#getdefinitionswithdatabase)

---

## Methods

<a id="getcountry"></a>

###  getCountry

▸ **getCountry**(): [Country](core.country.md)

*Defined in [packages/core/src/abstract-holiday-definition-factory.ts:44](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-holiday-definition-factory.ts#L44)*

**Returns:** [Country](core.country.md)

___
<a id="getcountryabbreviation"></a>

### `<Abstract>` getCountryAbbreviation

▸ **getCountryAbbreviation**(): `string`

*Defined in [packages/core/src/abstract-holiday-definition-factory.ts:287](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-holiday-definition-factory.ts#L287)*

**Returns:** `string`

___
<a id="getcountryname"></a>

### `<Abstract>` getCountryName

▸ **getCountryName**(): `string`

*Defined in [packages/core/src/abstract-holiday-definition-factory.ts:286](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-holiday-definition-factory.ts#L286)*

**Returns:** `string`

___
<a id="getdefinitions"></a>

###  getDefinitions

▸ **getDefinitions**(...administrativeUnits: *`Array`< `string` &#124; "ALL">*): [HolidayDefinition](core.holidaydefinition.md)[]

*Defined in [packages/core/src/abstract-holiday-definition-factory.ts:225](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-holiday-definition-factory.ts#L225)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` administrativeUnits | `Array`< `string` &#124; "ALL"> |

**Returns:** [HolidayDefinition](core.holidaydefinition.md)[]

___
<a id="getdefinitionswithdatabase"></a>

###  getDefinitionsWithDatabase

▸ **getDefinitionsWithDatabase**(databaseConfiguration?: *[DatabaseConfiguration](core.databaseconfiguration.md)<`any`, `any`>*, ...administrativeUnits: *`Array`< `string` &#124; "ALL">*): `Promise`<[HolidayDefinition](core.holidaydefinition.md)[]>

*Defined in [packages/core/src/abstract-holiday-definition-factory.ts:237](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/abstract-holiday-definition-factory.ts#L237)*

Returns all definitions for the given states and the country. This method determines if country holidays take precedence over state holidays.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` databaseConfiguration | [DatabaseConfiguration](core.databaseconfiguration.md)<`any`, `any`> |
| `Rest` administrativeUnits | `Array`< `string` &#124; "ALL"> |  the units to query definitions for; it is possible to query the country only |

**Returns:** `Promise`<[HolidayDefinition](core.holidaydefinition.md)[]>

___

