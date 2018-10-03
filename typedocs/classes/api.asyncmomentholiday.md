[Moment Holiday (by Nesto)](../README.md) > [api](../modules/api.md) > [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)

# Class: AsyncMomentHoliday

## Hierarchy

 [AbstractMomentHoliday](api.abstractmomentholiday.md)

**↳ AsyncMomentHoliday**

## Index

### Constructors

* [constructor](api.asyncmomentholiday.md#constructor)

### Methods

* [between](api.asyncmomentholiday.md#between)
* [for](api.asyncmomentholiday.md#for)
* [getHolidayDefinitions](api.asyncmomentholiday.md#getholidaydefinitions)
* [in](api.asyncmomentholiday.md#in)
* [inMonth](api.asyncmomentholiday.md#inmonth)
* [inYear](api.asyncmomentholiday.md#inyear)
* [isHoliday](api.asyncmomentholiday.md#isholiday)
* [nextHoliday](api.asyncmomentholiday.md#nextholiday)
* [nextHolidayWithName](api.asyncmomentholiday.md#nextholidaywithname)
* [previousHoliday](api.asyncmomentholiday.md#previousholiday)
* [previousHolidayWithName](api.asyncmomentholiday.md#previousholidaywithname)
* [getAdministrativeUnitIdentifiers](api.asyncmomentholiday.md#getadministrativeunitidentifiers)
* [getCountryIdentifiers](api.asyncmomentholiday.md#getcountryidentifiers)
* [getRegionIdentifiers](api.asyncmomentholiday.md#getregionidentifiers)
* [getStateIdentifiers](api.asyncmomentholiday.md#getstateidentifiers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AsyncMomentHoliday**(country: *[CountryIdentifier](../modules/api.md#countryidentifier)*, administrativeUnits: *`Array`< [StateIdentifier](../modules/api.md#stateidentifier) &#124; [RegionIdentifier](../modules/api.md#regionidentifier) &#124; "ALL">*, dbConfig?: *[DatabaseConfiguration](_node_modules__nesto_software_moment_holiday_core_src_database_database_configuration_.databaseconfiguration.md)<`any`, `any`>*): [AsyncMomentHoliday](api.asyncmomentholiday.md)

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[constructor](api.abstractmomentholiday.md#constructor)*

*Defined in [packages/api/src/async-moment-holiday.ts:15](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L15)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| country | [CountryIdentifier](../modules/api.md#countryidentifier) |
| administrativeUnits | `Array`< [StateIdentifier](../modules/api.md#stateidentifier) &#124; [RegionIdentifier](../modules/api.md#regionidentifier) &#124; "ALL"> |
| `Optional` dbConfig | [DatabaseConfiguration](_node_modules__nesto_software_moment_holiday_core_src_database_database_configuration_.databaseconfiguration.md)<`any`, `any`> |

**Returns:** [AsyncMomentHoliday](api.asyncmomentholiday.md)

___

## Methods

<a id="between"></a>

###  between

▸ **between**(start: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, end: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, options?: *[IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*): `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[between](api.abstractmomentholiday.md#between)*

*Defined in [packages/api/src/async-moment-holiday.ts:44](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| start | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| end | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| `Optional` options | [IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |

**Returns:** `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

___
<a id="for"></a>

###  for

▸ **for**(queryRange: *`DateRange`*, options?: *[IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*): `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[for](api.abstractmomentholiday.md#for)*

*Defined in [packages/api/src/async-moment-holiday.ts:54](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| queryRange | `DateRange` |
| `Optional` options | [IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |

**Returns:** `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

___
<a id="getholidaydefinitions"></a>

###  getHolidayDefinitions

▸ **getHolidayDefinitions**(): `Promise`<[HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[]>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[getHolidayDefinitions](api.abstractmomentholiday.md#getholidaydefinitions)*

*Defined in [packages/api/src/async-moment-holiday.ts:24](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L24)*

**Returns:** `Promise`<[HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[]>

___
<a id="in"></a>

###  in

▸ **in**(year: *`number`*, month?: *`number`*): `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[in](api.abstractmomentholiday.md#in)*

*Defined in [packages/api/src/async-moment-holiday.ts:89](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |
| `Optional` month | `number` |

**Returns:** `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

___
<a id="inmonth"></a>

###  inMonth

▸ **inMonth**(month: *`number`*, year: *`number`*): `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[inMonth](api.abstractmomentholiday.md#inmonth)*

*Defined in [packages/api/src/async-moment-holiday.ts:78](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| month | `number` |
| year | `number` |

**Returns:** `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

___
<a id="inyear"></a>

###  inYear

▸ **inYear**(year: *`number`*): `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[inYear](api.abstractmomentholiday.md#inyear)*

*Defined in [packages/api/src/async-moment-holiday.ts:68](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| year | `number` |

**Returns:** `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

___
<a id="isholiday"></a>

###  isHoliday

▸ **isHoliday**(momentToTest: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*): `Promise`<`boolean`>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[isHoliday](api.abstractmomentholiday.md#isholiday)*

*Defined in [packages/api/src/async-moment-holiday.ts:29](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentToTest | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| `Optional` predicate | `function` |

**Returns:** `Promise`<`boolean`>

___
<a id="nextholiday"></a>

###  nextHoliday

▸ **nextHoliday**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*): `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[nextHoliday](api.abstractmomentholiday.md#nextholiday)*

*Defined in [packages/api/src/async-moment-holiday.ts:97](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L97)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| `Optional` predicate | `function` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:** `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

___
<a id="nextholidaywithname"></a>

###  nextHolidayWithName

▸ **nextHolidayWithName**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayName: *`string`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*): `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[nextHolidayWithName](api.abstractmomentholiday.md#nextholidaywithname)*

*Defined in [packages/api/src/async-moment-holiday.ts:196](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L196)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| holidayName | `string` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:** `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

___
<a id="previousholiday"></a>

###  previousHoliday

▸ **previousHoliday**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*): `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[previousHoliday](api.abstractmomentholiday.md#previousholiday)*

*Defined in [packages/api/src/async-moment-holiday.ts:147](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L147)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| `Optional` predicate | `function` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:** `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

___
<a id="previousholidaywithname"></a>

###  previousHolidayWithName

▸ **previousHolidayWithName**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayName: *`string`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*): `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

*Overrides [AbstractMomentHoliday](api.abstractmomentholiday.md).[previousHolidayWithName](api.abstractmomentholiday.md#previousholidaywithname)*

*Defined in [packages/api/src/async-moment-holiday.ts:236](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/async-moment-holiday.ts#L236)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) | - |
| holidayName | `string` | - |
| `Optional` isCurrentDayInclusive | `boolean` | - |
| `Default value` maxSearchYears | `number` | 2000 |

**Returns:** `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

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

