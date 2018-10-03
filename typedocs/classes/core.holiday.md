[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [Holiday](../classes/core.holiday.md)

# Class: Holiday

## Hierarchy

**Holiday**

## Index

### Constructors

* [constructor](core.holiday.md#constructor)

### Accessors

* [moment](core.holiday.md#moment)
* [name](core.holiday.md#name)

### Methods

* [getTag](core.holiday.md#gettag)
* [getTags](core.holiday.md#gettags)
* [isTagged](core.holiday.md#istagged)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Holiday**(resolvedDate: *[Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md)*, holidayDefinition: *[HolidayDefinition](core.holidaydefinition.md)*): [Holiday](core.holiday.md)

*Defined in [packages/core/src/holiday.ts:8](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| resolvedDate | [Moment](../interfaces/_node_modules__nesto_software_moment_holiday_src_index_._moment_.moment.md) |
| holidayDefinition | [HolidayDefinition](core.holidaydefinition.md) |

**Returns:** [Holiday](core.holiday.md)

___

## Accessors

<a id="moment"></a>

###  moment

getmoment(): `any`

*Defined in [packages/core/src/holiday.ts:17](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L17)*

Returns a moment which represents the start of the holiday. The start of the holiday is always 0 o'clock.

**Returns:** `any`
the moment representation of the holiday

___
<a id="name"></a>

###  name

getname(): `string`

*Defined in [packages/core/src/holiday.ts:100](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L100)*

Returns the name of the holiday. The name is always a unique identifier within a locale package.

**Returns:** `string`
the holiday name

___

## Methods

<a id="gettag"></a>

###  getTag

▸ **getTag**<`T`>(key: *`object`*):  `T` &#124; `undefined`

*Defined in [packages/core/src/holiday.ts:26](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L26)*

Return the tag with the given key.

**Type parameters:**

#### T :  [AbstractTag](core.abstracttag.md)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `object` |  the key to look up |

**Returns:**  `T` &#124; `undefined`

a tag with given key or undefined if none is found

___
<a id="gettags"></a>

###  getTags

▸ **getTags**(): `IterableIterator`<[AbstractTag](core.abstracttag.md)>

*Defined in [packages/core/src/holiday.ts:90](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L90)*

Returns an iterator over all available tags.

**Returns:** `IterableIterator`<[AbstractTag](core.abstracttag.md)>
the holiday's tags

___
<a id="istagged"></a>

###  isTagged

▸ **isTagged**<`T`>(key: *`object`*): `boolean`

▸ **isTagged**<`T`>(key: *`object`*, value: *`any`*): `boolean`

▸ **isTagged**<`R`,`T`>(key: *`object`*, valueOrValues: * `R` &#124; `R`[]*): `boolean`

*Defined in [packages/core/src/holiday.ts:36](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L36)*

Returns true if a tag with given key exists. As BooleanTag does not contain any value, a user can only check for its existance.

If a value is given and the tag exists and contains values, it checks whether the value is contained by the tag.

**Type parameters:**

#### T :  [BooleanTag](core.booleantag.md)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `object` |  the key to search for. |

**Returns:** `boolean`
true if a tag with given key exists

*Defined in [packages/core/src/holiday.ts:44](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L44)*

Returns true if a tag with given key and value exists.

If a value is given and the tag exists and contains values, it checks whether the value is contained by the tag.

**Type parameters:**

#### T :  [EnumTag](core.enumtag.md)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `object` |  the key to search for |
| value | `any` |  the value to check if the tag exists |

**Returns:** `boolean`
true if a tag with given key exists and the tag's value matches the given value

*Defined in [packages/core/src/holiday.ts:52](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/holiday.ts#L52)*

Returns true if a tag with given key exists and the tag's values contain all of the given values.

If a value is given and the tag exists and contains values, it checks whether the value is contained by the tag.

**Type parameters:**

#### R 
#### T :  [MultivalueTag](core.multivaluetag.md)<`R`>
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `object` |  the key to search for |
| valueOrValues |  `R` &#124; `R`[]|  if it is an array then all values must be contained in the tag, otherwise values must match |

**Returns:** `boolean`
true if a tag with given key exists and the tag's values contain all of the given values

___

