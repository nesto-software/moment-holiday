[Moment Holiday (by Nesto)](../README.md) > [api](../modules/api.md) > [AbstractMomentHoliday](../classes/api.abstractmomentholiday.md)

# Class: AbstractMomentHoliday

A moment-holiday configuration object. Holds the information which holidays should be considered (i.e. the locale).

## Hierarchy

**AbstractMomentHoliday**

↳  [AsyncMomentHoliday](api.asyncmomentholiday.md)

↳  [SyncMomentHoliday](api.syncmomentholiday.md)

## Index

### Constructors

* [constructor](api.abstractmomentholiday.md#constructor)

### Methods

* [between](api.abstractmomentholiday.md#between)
* [for](api.abstractmomentholiday.md#for)
* [getHolidayDefinitions](api.abstractmomentholiday.md#getholidaydefinitions)
* [in](api.abstractmomentholiday.md#in)
* [inMonth](api.abstractmomentholiday.md#inmonth)
* [inYear](api.abstractmomentholiday.md#inyear)
* [isHoliday](api.abstractmomentholiday.md#isholiday)
* [nextHoliday](api.abstractmomentholiday.md#nextholiday)
* [nextHolidayWithName](api.abstractmomentholiday.md#nextholidaywithname)
* [previousHoliday](api.abstractmomentholiday.md#previousholiday)
* [previousHolidayWithName](api.abstractmomentholiday.md#previousholidaywithname)
* [getAdministrativeUnitIdentifiers](api.abstractmomentholiday.md#getadministrativeunitidentifiers)
* [getCountryIdentifiers](api.abstractmomentholiday.md#getcountryidentifiers)
* [getRegionIdentifiers](api.abstractmomentholiday.md#getregionidentifiers)
* [getStateIdentifiers](api.abstractmomentholiday.md#getstateidentifiers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AbstractMomentHoliday**(country: *[CountryIdentifier](../modules/api.md#countryidentifier)*, administrativeUnits: *`Array`< [StateIdentifier](../modules/api.md#stateidentifier) &#124; [RegionIdentifier](../modules/api.md#regionidentifier) &#124; "ALL">*, dbConfig?: *[DatabaseConfiguration](_node_modules__nesto_software_moment_holiday_core_src_database_database_configuration_.databaseconfiguration.md)<`any`, `any`>*, registry?: *[HolidayDefinitionFactoryRegistry](api.holidaydefinitionfactoryregistry.md)*): [AbstractMomentHoliday](api.abstractmomentholiday.md)

*Defined in [packages/api/src/abstract-moment-holiday.ts:37](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| country | [CountryIdentifier](../modules/api.md#countryidentifier) |
| administrativeUnits | `Array`< [StateIdentifier](../modules/api.md#stateidentifier) &#124; [RegionIdentifier](../modules/api.md#regionidentifier) &#124; "ALL"> |
| `Optional` dbConfig | [DatabaseConfiguration](_node_modules__nesto_software_moment_holiday_core_src_database_database_configuration_.databaseconfiguration.md)<`any`, `any`> |
| `Optional` registry | [HolidayDefinitionFactoryRegistry](api.holidaydefinitionfactoryregistry.md) |

**Returns:** [AbstractMomentHoliday](api.abstractmomentholiday.md)

___

## Methods

<a id="between"></a>

### `<Abstract>` between

▸ **between**(start: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, end: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, options?: *[IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*):  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Defined in [packages/api/src/abstract-moment-holiday.ts:105](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L105)*

Returns all holidays between the given moments.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the start date (inclusive by default) |
| end | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the end date (inclusive by default) |
| `Optional` options | [IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |  an object which configures how start and end are interpreted |

**Returns:**  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

an array of holidays between start and end date

___
<a id="for"></a>

### `<Abstract>` for

▸ **for**(queryRange: *`DateRange`*, options?: *[IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*):  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Defined in [packages/api/src/abstract-moment-holiday.ts:118](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L118)*

Returns all holidays in the given range. By default the days at the edge of the range are inclusive.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| queryRange | `DateRange` |  the range to query |
| `Optional` options | [IDateRangeOptions](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |  an object which configures how start and end of the range are interpreted |

**Returns:**  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

all holidays within the given range

___
<a id="getholidaydefinitions"></a>

### `<Abstract>` getHolidayDefinitions

▸ **getHolidayDefinitions**():  [HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[] &#124; `Promise`<[HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[]>

*Defined in [packages/api/src/abstract-moment-holiday.ts:82](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L82)*

Returns the holiday definitions which are used to compute the actual holidays for a specific date range.

**Returns:**  [HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[] &#124; `Promise`<[HolidayDefinition](_node_modules__nesto_software_moment_holiday_core_src_holiday_definition_.holidaydefinition.md)[]>

the holiday definitions

___
<a id="in"></a>

### `<Abstract>` in

▸ **in**(year: *`number`*, month?: *`number`*):  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Defined in [packages/api/src/abstract-moment-holiday.ts:146](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L146)*

Returns all holidays in the given year (and month if given). This is a convenience method for inMonth(number, number) and inYear(number).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  the year to compute holidays for |
| `Optional` month | `number` |  optional: only return holidays in the given month - zero based |

**Returns:**  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

all holidays in given year (and month)

___
<a id="inmonth"></a>

### `<Abstract>` inMonth

▸ **inMonth**(month: *`number`*, year: *`number`*):  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Defined in [packages/api/src/abstract-moment-holiday.ts:136](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L136)*

Returns all holidays for the given month

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| month | `number` |  the month in the given year - zero based |
| year | `number` |  the year |

**Returns:**  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

all holidays within the given year and the given month

___
<a id="inyear"></a>

### `<Abstract>` inYear

▸ **inYear**(year: *`number`*):  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Defined in [packages/api/src/abstract-moment-holiday.ts:128](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L128)*

Returns all holidays for the given year.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  the year for the lookup |

**Returns:**  `Promise`<[HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>> &#124; [HolidayArray](_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

all holidays within the given year

___
<a id="isholiday"></a>

### `<Abstract>` isHoliday

▸ **isHoliday**(momentToTest: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*):  `Promise`<`boolean`> &#124; `boolean`

*Defined in [packages/api/src/abstract-moment-holiday.ts:93](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L93)*

Returns whether the given moment is a holiday. Please note that the api return all holidays - including non-public! You must use the predicate parameter to in order to select specific types of holiday.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentToTest | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the moment to test |
| `Optional` predicate | `function` |  the predicate to test the holidy against (if any is found) |

**Returns:**  `Promise`<`boolean`> &#124; `boolean`

true if the given moment belongs to a holidays

___
<a id="nextholiday"></a>

### `<Abstract>` nextHoliday

▸ **nextHoliday**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/abstract-moment-holiday.ts:162](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L162)*

Returns the upcoming holiday for the given moment. Please note: This method could theoretically end up searching infinitely. If you use a predicate: please make sure that you specify a predicate which returns true for any holiday.

We implemented a gurard to prevent an infinite loop: This methods ends its search after scanning 2000 years.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the moment for which to retrieve the following holiday |
| `Optional` predicate | `function` |  the predicate to test the holidy against (if any is found) |
| `Optional` isCurrentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |
| `Optional` maxSearchYears | `number` |  the max. number of years to search (min=1) |

**Returns:**  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

the holiday which is following the given moment or null if none found

___
<a id="nextholidaywithname"></a>

### `<Abstract>` nextHolidayWithName

▸ **nextHolidayWithName**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayName: *`string`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/abstract-moment-holiday.ts:201](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L201)*

Returns the upcoming holiday with the given name. The search is capped at 2000 years by default - you can overwrite this setting via maxSearchYears. This is a guard to prevent an infinite search.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the moment for which to retrieve the next holiday with given name |
| holidayName | `string` |  the name of the holiday to search for |
| `Optional` isCurrentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |
| `Optional` maxSearchYears | `number` |  the max. number of years to search (min=1) - applies for holidays which appear once a while |

**Returns:**  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

the holiday which is following the given moment and has the given name or null if none found

___
<a id="previousholiday"></a>

### `<Abstract>` previousHoliday

▸ **previousHoliday**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, predicate?: *`function`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/abstract-moment-holiday.ts:183](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L183)*

Returns the upcoming holiday for the given moment. Please note: This method could theoretically end up searching infinitely. If you use a predicate: please make sure that you specify a predicate which returns true for any holiday.

We implemented a gurard to prevent an infinite loop: This methods ends its search after scanning 2000 years.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the moment for which to retrieve the preceding holiday |
| `Optional` predicate | `function` |  the predicate to test the holidy against (if any is found) |
| `Optional` isCurrentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |
| `Optional` maxSearchYears | `number` |  the max. number of years to search (min=1) |

**Returns:**  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

the holiday which is preceding the given moment or null if none found

___
<a id="previousholidaywithname"></a>

### `<Abstract>` previousHolidayWithName

▸ **previousHolidayWithName**(momentToStart: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayName: *`string`*, isCurrentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/abstract-moment-holiday.ts:218](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L218)*

Returns the preceding holiday with the given name. The search is capped at 2000 years by default - you can overwrite this setting via maxSearchYears. This is a guard to prevent an infinite search.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentToStart | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |  the moment for which to retrieve the preceding holiday with given name |
| holidayName | `string` |  the name of the holiday to search for |
| `Optional` isCurrentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |
| `Optional` maxSearchYears | `number` |  the max. number of years to search (min=1) - applies for holidays which appear once a while |

**Returns:**  `Promise`< [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`> &#124; [Holiday](_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

the holiday which is preceding the given moment and has the given name or null if none found

___
<a id="getadministrativeunitidentifiers"></a>

### `<Static>` getAdministrativeUnitIdentifiers

▸ **getAdministrativeUnitIdentifiers**(countryId: *[CountryIdentifier](../modules/api.md#countryidentifier)*): `any`

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

*Defined in [packages/api/src/abstract-moment-holiday.ts:228](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L228)*

Returns the identifiers of all countries which are registered and for which you can request holidays.

**Returns:** `Map`<[CountryAbbreviation](../modules/api.md#countryabbreviation), [CountryName](../modules/api.md#countryname)>
a map which maps the country abbreviation to its respective country name

___
<a id="getregionidentifiers"></a>

### `<Static>` getRegionIdentifiers

▸ **getRegionIdentifiers**(countryId: *[CountryIdentifier](../modules/api.md#countryidentifier)*): `any`

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

*Defined in [packages/api/src/abstract-moment-holiday.ts:248](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/abstract-moment-holiday.ts#L248)*

Returns the id of all states within the selected country.

**Parameters:**

| Param | Type |
| ------ | ------ |
| countryId | [CountryIdentifier](../modules/api.md#countryidentifier) |

**Returns:** `any`
an array of identifiers for states

___

