[Moment Holiday (by Nesto)](../README.md) > [api](../modules/api.md) > [HolidayDefinitionFactoryRegistry](../classes/api.holidaydefinitionfactoryregistry.md)

# Class: HolidayDefinitionFactoryRegistry

## Hierarchy

**HolidayDefinitionFactoryRegistry**

## Index

### Methods

* [getAllAvailableCountryIdentifiers](api.holidaydefinitionfactoryregistry.md#getallavailablecountryidentifiers)
* [getFactoryByCountryIdentifier](api.holidaydefinitionfactoryregistry.md#getfactorybycountryidentifier)
* [getInstance](api.holidaydefinitionfactoryregistry.md#getinstance)

---

## Methods

<a id="getallavailablecountryidentifiers"></a>

###  getAllAvailableCountryIdentifiers

▸ **getAllAvailableCountryIdentifiers**(): `Map`<[CountryAbbreviation](../modules/api.md#countryabbreviation), [CountryName](../modules/api.md#countryname)>

*Defined in [packages/api/src/holiday-definition-factory-registry.ts:46](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/holiday-definition-factory-registry.ts#L46)*

**Returns:** `Map`<[CountryAbbreviation](../modules/api.md#countryabbreviation), [CountryName](../modules/api.md#countryname)>

___
<a id="getfactorybycountryidentifier"></a>

###  getFactoryByCountryIdentifier

▸ **getFactoryByCountryIdentifier**(country: * [CountryIdentifier](../modules/api.md#countryidentifier) &#124; [CountryName](../modules/api.md#countryname) &#124; [CountryAbbreviation](../modules/api.md#countryabbreviation)*): [AbstractHolidayDefinitionFactory](_node_modules__nesto_software_moment_holiday_core_src_abstract_holiday_definition_factory_.abstractholidaydefinitionfactory.md)

*Defined in [packages/api/src/holiday-definition-factory-registry.ts:28](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/holiday-definition-factory-registry.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| country |  [CountryIdentifier](../modules/api.md#countryidentifier) &#124; [CountryName](../modules/api.md#countryname) &#124; [CountryAbbreviation](../modules/api.md#countryabbreviation)|

**Returns:** [AbstractHolidayDefinitionFactory](_node_modules__nesto_software_moment_holiday_core_src_abstract_holiday_definition_factory_.abstractholidaydefinitionfactory.md)

___
<a id="getinstance"></a>

### `<Static>` getInstance

▸ **getInstance**(): [HolidayDefinitionFactoryRegistry](api.holidaydefinitionfactoryregistry.md)

*Defined in [packages/api/src/holiday-definition-factory-registry.ts:58](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/holiday-definition-factory-registry.ts#L58)*

**Returns:** [HolidayDefinitionFactoryRegistry](api.holidaydefinitionfactoryregistry.md)

___

