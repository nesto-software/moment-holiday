[Moment Holiday (by Nesto)](../README.md) > [api](../modules/api.md) > ["moment"](../modules/api._moment_.md) > [Moment](../interfaces/api._moment_.moment.md)

# Interface: Moment

The Moment class from moment.js. We extend this class by adding holiday specific methods. Those methods delegate to the {@link MomentHoliday} class.

## Hierarchy

**Moment**

## Index

### Methods

* [holidaysBetween](api._moment_.moment.md#holidaysbetween)
* [isHoliday](api._moment_.moment.md#isholiday)
* [nextHoliday](api._moment_.moment.md#nextholiday)
* [nextHolidayWithName](api._moment_.moment.md#nextholidaywithname)
* [previousHoliday](api._moment_.moment.md#previousholiday)
* [previousHolidayWithName](api._moment_.moment.md#previousholidaywithname)

---

## Methods

<a id="holidaysbetween"></a>

###  holidaysBetween

▸ **holidaysBetween**(momentHoliday: *[AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)*, end: *`this`*, options?: *[IDateRangeOptions](_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*): `Promise`<[HolidayArray](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>

▸ **holidaysBetween**(momentHoliday: *[SyncMomentHoliday](../classes/api.syncmomentholiday.md)*, end: *`this`*, options?: *[IDateRangeOptions](_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md)*): [HolidayArray](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

*Defined in [packages/api/src/index.ts:117](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L117)*

Returns all holidays between this moment (inclusive by default) and the given end moment.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentHoliday | [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md) |  the holiday configuration to use for determining holidays |
| end | `this` |  the end date (inclusive by default) |
| `Optional` options | [IDateRangeOptions](_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |

**Returns:** `Promise`<[HolidayArray](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>>
an array of holidays between this moment and the given end moment

*Defined in [packages/api/src/index.ts:122](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [SyncMomentHoliday](../classes/api.syncmomentholiday.md) |
| end | `this` |
| `Optional` options | [IDateRangeOptions](_node_modules__nesto_software_moment_holiday_core_src_date_range_options_interface_.idaterangeoptions.md) |

**Returns:** [HolidayArray](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_array_.holidayarray.md)<[Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md)>

___
<a id="isholiday"></a>

###  isHoliday

▸ **isHoliday**(momentHoliday: *[AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)*, predicate?: *`function`*): `Promise`<`boolean`>

▸ **isHoliday**(momentHoliday: *[SyncMomentHoliday](../classes/api.syncmomentholiday.md)*, predicate?: *`function`*): `boolean`

▸ **isHoliday**(momentHoliday: *[AbstractMomentHoliday](../classes/api.abstractmomentholiday.md)*, predicate?: *`function`*):  `Promise`<`boolean`> &#124; `boolean`

*Defined in [packages/api/src/index.ts:24](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L24)*

Returns if this moment's day is a holiday for the given holiday configuration.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentHoliday | [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md) |  the holiday configuration to use for determining holidays |
| `Optional` predicate | `function` |  if a holiday is determined, you can filter its tags via a predicate |

**Returns:** `Promise`<`boolean`>
true if this moment's day is a holiday

*Defined in [packages/api/src/index.ts:25](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [SyncMomentHoliday](../classes/api.syncmomentholiday.md) |
| `Optional` predicate | `function` |

**Returns:** `boolean`

*Defined in [packages/api/src/index.ts:26](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [AbstractMomentHoliday](../classes/api.abstractmomentholiday.md) |
| `Optional` predicate | `function` |

**Returns:**  `Promise`<`boolean`> &#124; `boolean`

___
<a id="nextholiday"></a>

###  nextHoliday

▸ **nextHoliday**(momentHoliday: *[AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)*, predicate?: *`function`*, currentDayInclusive?: *`boolean`*): `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

▸ **nextHoliday**(momentHoliday: *[SyncMomentHoliday](../classes/api.syncmomentholiday.md)*, predicate?: *`function`*, currentDayInclusive?: *`boolean`*):  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/index.ts:38](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L38)*

Returns the upcoming holiday for the given moment. Optionally checks if the holiday fulfills the given predicate.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentHoliday | [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md) |  the holiday configuration to use for determining holidays |
| `Optional` predicate | `function` |  if a holiday is determined, you can filter its tags via a predicate |
| `Optional` currentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |

**Returns:** `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>
the holiday which is following the given moment

*Defined in [packages/api/src/index.ts:43](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [SyncMomentHoliday](../classes/api.syncmomentholiday.md) |
| `Optional` predicate | `function` |
| `Optional` currentDayInclusive | `boolean` |

**Returns:**  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="nextholidaywithname"></a>

###  nextHolidayWithName

▸ **nextHolidayWithName**(momentHoliday: *[AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)*, holidayName: *`string`*, currentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*): `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

▸ **nextHolidayWithName**(momentHoliday: *[SyncMomentHoliday](../classes/api.syncmomentholiday.md)*, holidayName: *`string`*, currentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/index.ts:75](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L75)*

Returns the upcoming holiday for the given moment which has the given name.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentHoliday | [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md) |  the holiday configuration to use for determining holidays |
| holidayName | `string` |  the name of the holiday to search for |
| `Optional` currentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |
| `Optional` maxSearchYears | `number` |  max. number of years to search (min=1) - applies for holidays which appear once a while |

**Returns:** `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>
the holiday which is following the given moment and has the given name

*Defined in [packages/api/src/index.ts:81](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [SyncMomentHoliday](../classes/api.syncmomentholiday.md) |
| holidayName | `string` |
| `Optional` currentDayInclusive | `boolean` |
| `Optional` maxSearchYears | `number` |

**Returns:**  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="previousholiday"></a>

###  previousHoliday

▸ **previousHoliday**(momentHoliday: *[AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)*, predicate?: *`function`*, currentDayInclusive?: *`boolean`*): `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

▸ **previousHoliday**(momentHoliday: *[SyncMomentHoliday](../classes/api.syncmomentholiday.md)*, predicate?: *`function`*, currentDayInclusive?: *`boolean`*):  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/index.ts:56](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L56)*

Returns the preceding holiday for the given moment.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentHoliday | [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md) |  the holiday configuration to use for determining holidays |
| `Optional` predicate | `function` |  if a holiday is determined, you can filter its tags via a predicate |
| `Optional` currentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |

**Returns:** `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>
the holiday which is preceding the given moment

*Defined in [packages/api/src/index.ts:61](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [SyncMomentHoliday](../classes/api.syncmomentholiday.md) |
| `Optional` predicate | `function` |
| `Optional` currentDayInclusive | `boolean` |

**Returns:**  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___
<a id="previousholidaywithname"></a>

###  previousHolidayWithName

▸ **previousHolidayWithName**(momentHoliday: *[AsyncMomentHoliday](../classes/api.asyncmomentholiday.md)*, holidayName: *`string`*, currentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*): `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>

▸ **previousHolidayWithName**(momentHoliday: *[SyncMomentHoliday](../classes/api.syncmomentholiday.md)*, holidayName: *`string`*, currentDayInclusive?: *`boolean`*, maxSearchYears?: *`number`*):  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

*Defined in [packages/api/src/index.ts:96](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L96)*

Returns the preceding holiday for the given moment which has the given name.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| momentHoliday | [AsyncMomentHoliday](../classes/api.asyncmomentholiday.md) |  the holiday configuration to use for determining holidays |
| holidayName | `string` |  the name of the holiday to search for |
| `Optional` currentDayInclusive | `boolean` |  if true then the current day is examined, otherwise it is not |
| `Optional` maxSearchYears | `number` |  max. number of years to search (min=1) - applies for holidays which appear once a while |

**Returns:** `Promise`< [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`>
the holiday which is preceding the given moment and has the given name

*Defined in [packages/api/src/index.ts:102](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/api/src/index.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| momentHoliday | [SyncMomentHoliday](../classes/api.syncmomentholiday.md) |
| holidayName | `string` |
| `Optional` currentDayInclusive | `boolean` |
| `Optional` maxSearchYears | `number` |

**Returns:**  [Holiday](../classes/_node_modules__nesto_software_moment_holiday_core_src_holiday_.holiday.md) &#124; `null`

___

