[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [HolidayDefinition](../classes/core.holidaydefinition.md)

# Class: HolidayDefinition

## Hierarchy

**HolidayDefinition**

## Index

### Constructors

* [constructor](core.holidaydefinition.md#constructor)

### Accessors

* [date](core.holidaydefinition.md#date)
* [name](core.holidaydefinition.md#name)
* [tags](core.holidaydefinition.md#tags)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HolidayDefinition**(_name: *`string`*, _date: *[AbstractDate](core.abstractdate.md)*, tags: * [AbstractTag](core.abstracttag.md)[] &#124; `undefined`*): [HolidayDefinition](core.holidaydefinition.md)

*Defined in [packages/core/src/holiday-definition.ts:5](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday-definition.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _name | `string` |
| _date | [AbstractDate](core.abstractdate.md) |
| tags |  [AbstractTag](core.abstracttag.md)[] &#124; `undefined`|

**Returns:** [HolidayDefinition](core.holidaydefinition.md)

___

## Accessors

<a id="date"></a>

###  date

getdate(): [AbstractDate](core.abstractdate.md)

*Defined in [packages/core/src/holiday-definition.ts:33](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday-definition.ts#L33)*

The date of the holiday.

**Returns:** [AbstractDate](core.abstractdate.md)

___
<a id="name"></a>

###  name

getname(): `string`

*Defined in [packages/core/src/holiday-definition.ts:26](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday-definition.ts#L26)*

The name of the holiday. Must be unique. This value is used to do duplicate detection when merging holidays from different sources (such as different states).

**Returns:** `string`

___
<a id="tags"></a>

###  tags

gettags(): `ReadonlyMap`<`string`, [AbstractTag](core.abstracttag.md)>

*Defined in [packages/core/src/holiday-definition.ts:40](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday-definition.ts#L40)*

Additional information concerning the holiday.

**Returns:** `ReadonlyMap`<`string`, [AbstractTag](core.abstracttag.md)>

___

