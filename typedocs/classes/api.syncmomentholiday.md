[Moment Holiday (by Nesto)](../README.md) > [api](../modules/api.md) > [SyncMomentHoliday](../classes/api.syncmomentholiday.md)

# Class: SyncMomentHoliday

## Hierarchy

 [AbstractMomentHoliday](api.abstractmomentholiday.md)

**↳ SyncMomentHoliday**

## Index

### Constructors

* [constructor](api.syncmomentholiday.md#constructor)

### Methods

* [between](api.syncmomentholiday.md#between)
* [for](api.syncmomentholiday.md#for)
* [getHolidayDefinitions](api.syncmomentholiday.md#getholidaydefinitions)
* [in](api.syncmomentholiday.md#in)
* [inMonth](api.syncmomentholiday.md#inmonth)
* [inYear](api.syncmomentholiday.md#inyear)
* [isHoliday](api.syncmomentholiday.md#isholiday)
* [nextHoliday](api.syncmomentholiday.md#nextholiday)
* [nextHolidayWithName](api.syncmomentholiday.md#nextholidaywithname)
* [previousHoliday](api.syncmomentholiday.md#previousholiday)
* [previousHolidayWithName](api.syncmomentholiday.md#previousholidaywithname)
* [withDatabase](api.syncmomentholiday.md#withdatabase)
* [getAdministrativeUnitIdentifiers](api.syncmomentholiday.md#getadministrativeunitidentifiers)
* [getCountryIdentifiers](api.syncmomentholiday.md#getcountryidentifiers)
* [getRegionIdentifiers](api.syncmomentholiday.md#getregionidentifiers)
* [getStateIdentifiers](api.syncmomentholiday.md#getstateidentifiers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SyncMomentHoliday**(country: *[CountryIdentifier](../modules/api.md#countryidentifier)*, administrativeUnits: *`Array`< [StateIdentifier](../modules/api.md#stateidentifier) &#124; [RegionIdentifier](../modules/api.md#regionidentifier) &#124; "ALL">*, registry?: *[HolidayDefinitionFactoryRegistry](api.holidaydefinitionfactoryregistry.md)*): [SyncMomentHoliday](api.syncmomentholiday.md)

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[constructor](api.abstractmomentholiday.md#constructor)*

*Defined in [packages/api/src/sync-moment-holiday.ts:17](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| country | [CountryIdentifier](../modules/api.md#countryidentifier) |
| administrativeUnits | `Array`< [StateIdentifier](../modules/api.md#stateidentifier) &#124; [RegionIdentifier](../modules/api.md#regionidentifier) &#124; "ALL"> |
| `Optional` registry | [HolidayDefinitionFactoryRegistry](api.holidaydefinitionfactoryregistry.md) |

**Returns:** [SyncMomentHoliday](api.syncmomentholiday.md)

___

## Methods

<a id="between"></a>

###  between

▸ **between**(start: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, end: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, options?: *[IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*): [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[between](api.abstractmomentholiday.md#between)*

*Defined in [packages/api/src/sync-moment-holiday.ts:51](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| start | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| end | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| `Optional` options | [IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |

**Returns:** [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

___
<a id="for"></a>

###  for

▸ **for**(queryRange: *`DateRange`*, options?: *[IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*): [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[for](api.abstractmomentholiday.md#for)*

*Defined in [packages/api/src/sync-moment-holiday.ts:62](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| queryRange | `DateRange` |
| `Optional` options | [IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |

**Returns:** [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

___
<a id="getholidaydefinitions"></a>

###  getHolidayDefinitions

▸ **getHolidayDefinitions**(): [HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[]

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[getHolidayDefinitions](api.abstractmomentholiday.md#getholidaydefinitions)*

*Defined in [packages/api/src/sync-moment-holiday.ts:33](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L33)*

**Returns:** [HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[]

___
<a id="in"></a>

###  in

▸ **in**(year: *`number`*, month?: *`number`*): [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[in](api.abstractmomentholiday.md#in)*

*Defined in [packages/api/src/sync-moment-holiday.ts:100](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |
| `Optional` month | `number` |

**Returns:** [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

___
<a id="inmonth"></a>

###  inMonth

▸ **inMonth**(month: *`number`*, year: *`number`*): [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[inMonth](api.abstractmomentholiday.md#inmonth)*

*Defined in [packages/api/src/sync-moment-holiday.ts:88](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| month | `number` |
| year | `number` |

**Returns:** [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

___
<a id="inyear"></a>

###  inYear

▸ **inYear**(year: *`number`*): [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[inYear](api.abstractmomentholiday.md#inyear)*

*Defined in [packages/api/src/sync-moment-holiday.ts:77](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |

**Returns:** [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

___
<a id="isholiday"></a>

###  isHoliday

▸ **isHoliday**(momentToTest: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*): `boolean`

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[isHoliday](api.abstractmomentholiday.md#isholiday)*

*Defined in [packages/api/src/sync-moment-holiday.ts:37](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentToTest | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| `Optional` predicate | `function` |

**Returns:** `boolean`

___
<a id="nextholiday"></a>

###  nextHoliday

▸ **nextHoliday**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[nextHoliday](api.abstractmomentholiday.md#nextholiday)*

*Defined in [packages/api/src/sync-moment-holiday.ts:108](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L108)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| `Optional` predicate | `function` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:**  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="nextholidaywithname"></a>

###  nextHolidayWithName

▸ **nextHolidayWithName**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayName: *`string`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[nextHolidayWithName](api.abstractmomentholiday.md#nextholidaywithname)*

*Defined in [packages/api/src/sync-moment-holiday.ts:206](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L206)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| holidayName | `string` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:**  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="previousholiday"></a>

###  previousHoliday

▸ **previousHoliday**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[previousHoliday](api.abstractmomentholiday.md#previousholiday)*

*Defined in [packages/api/src/sync-moment-holiday.ts:157](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L157)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| `Optional` predicate | `function` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:**  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="previousholidaywithname"></a>

###  previousHolidayWithName

▸ **previousHolidayWithName**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayName: *`string`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[previousHolidayWithName](api.abstractmomentholiday.md#previousholidaywithname)*

*Defined in [packages/api/src/sync-moment-holiday.ts:246](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L246)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| holidayName | `string` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:**  [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="withdatabase"></a>

###  withDatabase

▸ **withDatabase**(dbConfig: *[DatabaseConfiguration](_node_modules__nesto_software_moment_holiday_core_src_database_database_configuration_.databaseconfiguration.md)<`any`, `any`>*): [AsyncMomentHoliday](api.asyncmomentholiday.md)

*Defined in [packages/api/src/sync-moment-holiday.ts:29](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/sync-moment-holiday.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| dbConfig | [DatabaseConfiguration](_node_modules__nesto_software_moment_holiday_core_src_database_database_configuration_.databaseconfiguration.md)<`any`, `any`> |

**Returns:** [AsyncMomentHoliday](api.asyncmomentholiday.md)

___
<a id="getadministrativeunitidentifiers"></a>

### `<Static>` getAdministrativeUnitIdentifiers

▸ **getAdministrativeUnitIdentifiers**(countryId: *[CountryIdentifier](../modules/api.md#countryidentifier)*): `any`

*Inherited from [AbstractMomentHoliday](api.abstractmomentholiday.md).[getAdministrativeUnitIdentifiers](api.abstractmomentholiday.md#getadministrativeunitidentifiers)*

*Defined in [packages/api/src/abstract-moment-holiday.ts:236](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L236)*

Returns the id of all administrative units within the selected country.

**Parameters:**

| Param | Type |
| ------ | ------ |
| countryId | [CountryIdentifier](../modules/api.md#countryidentifier) |

**Returns:** `any`
an array of identifiers for administrative units (i.e. states and regions)

___
<a id="getcountryidentifiers"></a>

### `<Static>` getCountryIdentifiers

▸ **getCountryIdentifiers**(): `Map`<[CountryAbbreviation](../modules/api.md#countryabbreviation), [CountryName](../modules/api.md#countryname)>

*Inherited from [AbstractMomentHoliday](api.abstractmomentholiday.md).[getCountryIdentifiers](api.abstractmomentholiday.md#getcountryidentifiers)*

*Defined in [packages/api/src/abstract-moment-holiday.ts:228](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L228)*

Returns the identifiers of all countries which are registered and for which you can request holidays.

**Returns:** `Map`<[CountryAbbreviation](../modules/api.md#countryabbreviation), [CountryName](../modules/api.md#countryname)>
a map which maps the country abbreviation to its respective country name

___
<a id="getregionidentifiers"></a>

### `<Static>` getRegionIdentifiers

▸ **getRegionIdentifiers**(countryId: *[CountryIdentifier](../modules/api.md#countryidentifier)*): `any`

*Inherited from [AbstractMomentHoliday](api.abstractmomentholiday.md).[getRegionIdentifiers](api.abstractmomentholiday.md#getregionidentifiers)*

*Defined in [packages/api/src/abstract-moment-holiday.ts:261](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L261)*

Returns the id of all regions within the selected country.

**Parameters:**

| Param | Type |
| ------ | ------ |
| countryId | [CountryIdentifier](../modules/api.md#countryidentifier) |

**Returns:** `any`
an array of identifiers for regions

___
<a id="getstateidentifiers"></a>

### `<Static>` getStateIdentifiers

▸ **getStateIdentifiers**(countryId: *[CountryIdentifier](../modules/api.md#countryidentifier)*): `any`

*Inherited from [AbstractMomentHoliday](api.abstractmomentholiday.md).[getStateIdentifiers](api.abstractmomentholiday.md#getstateidentifiers)*

*Defined in [packages/api/src/abstract-moment-holiday.ts:248](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L248)*

Returns the id of all states within the selected country.

**Parameters:**

| Param | Type |
| ------ | ------ |
| countryId | [CountryIdentifier](../modules/api.md#countryidentifier) |

**Returns:** `any`
an array of identifiers for states

___

