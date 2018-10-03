[Moment Holiday (by Nesto)](../README.md) > [locales](../modules/locales.md)

# Package: locales

## Index

### Enumerations

* [HolidayName](../enums/locales.holidayname.md)
* [HolidayName](../enums/locales.holidayname-1.md)
* [Religion](../enums/locales.religion.md)

### Classes

* [AUGRegionLocale](../classes/locales.augregionlocale.md)
* [AustrianCountryLocale](../classes/locales.austriancountrylocale.md)
* [AustrianHolidayDefinitionFactory](../classes/locales.austrianholidaydefinitionfactory.md)
* [BBStateLocale](../classes/locales.bbstatelocale.md)
* [BEStateLocale](../classes/locales.bestatelocale.md)
* [BWStateLocale](../classes/locales.bwstatelocale.md)
* [BYCatholicRegionLocale](../classes/locales.bycatholicregionlocale.md)
* [BYStateLocale](../classes/locales.bystatelocale.md)
* [GermanCountryLocale](../classes/locales.germancountrylocale.md)
* [GermanHolidayDefinitionFactory](../classes/locales.germanholidaydefinitionfactory.md)
* [HBStateLocale](../classes/locales.hbstatelocale.md)
* [HEStateLocale](../classes/locales.hestatelocale.md)
* [HHStateLocale](../classes/locales.hhstatelocale.md)
* [MVStateLocale](../classes/locales.mvstatelocale.md)
* [NIStateLocale](../classes/locales.nistatelocale.md)
* [NWStateLocale](../classes/locales.nwstatelocale.md)
* [RPStateLocale](../classes/locales.rpstatelocale.md)
* [ReligionTag](../classes/locales.religiontag.md)
* [SHStateLocale](../classes/locales.shstatelocale.md)
* [SLStateLocale](../classes/locales.slstatelocale.md)
* [SNCatholicRegionLocale](../classes/locales.sncatholicregionlocale.md)
* [SNStateLocale](../classes/locales.snstatelocale.md)
* [STStateLocale](../classes/locales.ststatelocale.md)
* [THCatholicRegionLocale](../classes/locales.thcatholicregionlocale.md)
* [THStateLocale](../classes/locales.thstatelocale.md)

### Type aliases

* [AustrianCountryAbbrevition](locales.md#austriancountryabbrevition)
* [AustrianCountryName](locales.md#austriancountryname)
* [AustrianStateAbbreviation](locales.md#austrianstateabbreviation)
* [GermanCountryAbbrevition](locales.md#germancountryabbrevition)
* [GermanCountryName](locales.md#germancountryname)
* [GermanRegionAbbreviation](locales.md#germanregionabbreviation)
* [GermanStateAbbreviation](locales.md#germanstateabbreviation)

### Functions

* [COMMON_STATE_HOLIDAY_DEFINITIONS](locales.md#common_state_holiday_definitions)

---

## Type aliases

<a id="austriancountryabbrevition"></a>

###  AustrianCountryAbbrevition

**Ƭ AustrianCountryAbbrevition**: *"AT"*

*Defined in [packages/locales/austria/src/austrian-holiday-definition-factory.ts:33](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/austria/src/austrian-holiday-definition-factory.ts#L33)*

___
<a id="austriancountryname"></a>

###  AustrianCountryName

**Ƭ AustrianCountryName**: *"Austria"*

*Defined in [packages/locales/austria/src/austrian-holiday-definition-factory.ts:32](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/austria/src/austrian-holiday-definition-factory.ts#L32)*

___
<a id="austrianstateabbreviation"></a>

###  AustrianStateAbbreviation

**Ƭ AustrianStateAbbreviation**: *`&quot;&quot;`*

*Defined in [packages/locales/austria/src/austrian-holiday-definition-factory.ts:34](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/austria/src/austrian-holiday-definition-factory.ts#L34)*

___
<a id="germancountryabbrevition"></a>

###  GermanCountryAbbrevition

**Ƭ GermanCountryAbbrevition**: *"DE"*

*Defined in [packages/locales/germany/src/german-holiday-definition-factory.ts:79](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/germany/src/german-holiday-definition-factory.ts#L79)*

___
<a id="germancountryname"></a>

###  GermanCountryName

**Ƭ GermanCountryName**: *"Germany"*

*Defined in [packages/locales/germany/src/german-holiday-definition-factory.ts:78](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/germany/src/german-holiday-definition-factory.ts#L78)*

___
<a id="germanregionabbreviation"></a>

###  GermanRegionAbbreviation

**Ƭ GermanRegionAbbreviation**: * "BY_AUG" &#124; "BY_CATHOLIC" &#124; "TH_CATHOLIC" &#124; "SN_CATHOLIC"
*

*Defined in [packages/locales/germany/src/german-holiday-definition-factory.ts:82](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/germany/src/german-holiday-definition-factory.ts#L82)*

___
<a id="germanstateabbreviation"></a>

###  GermanStateAbbreviation

**Ƭ GermanStateAbbreviation**: * "BW" &#124; "BY" &#124; "ST" &#124; "TH" &#124; "NW" &#124; "BE" &#124; "HH" &#124; "MV" &#124; "BB" &#124; "HB" &#124; "HE" &#124; "NI" &#124; "RP" &#124; "SL" &#124; "SN" &#124; "SH"
*

*Defined in [packages/locales/germany/src/german-holiday-definition-factory.ts:80](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/germany/src/german-holiday-definition-factory.ts#L80)*

___

## Functions

<a id="common_state_holiday_definitions"></a>

### `<Const>` COMMON_STATE_HOLIDAY_DEFINITIONS

▸ **COMMON_STATE_HOLIDAY_DEFINITIONS**(legislation: *[Legislation](../classes/_node_modules__nesto_software_moment_holiday_core_src_legislation_.legislation.md)*): [IHolidayDefinitionInternal](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_interface_.iholidaydefinitioninternal.md)[]

*Defined in [packages/locales/germany/src/locale/common-state-holiday-definitions.ts:19](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/locales/germany/src/locale/common-state-holiday-definitions.ts#L19)*

Returns holiday definitions which are usually common for all german states. However, they are defined per state. That is why each state locale returns them.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| legislation | [Legislation](../classes/_node_modules__nesto_software_moment_holiday_core_src_legislation_.legislation.md) |  the legislation of the state which defines this common holiday definitions itself |

**Returns:** [IHolidayDefinitionInternal](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_interface_.iholidaydefinitioninternal.md)[]

___

