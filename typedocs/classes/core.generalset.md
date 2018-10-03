[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [GeneralSet](../classes/core.generalset.md)

# Class: GeneralSet

Implementation of a set which determines equality based on the name property of an object which implements [IGeneralSetComparable](../interfaces/core.igeneralsetcomparable.md).

from: [https://stackoverflow.com/questions/29759480/how-to-customize-object-equality-for-javascript-sets](https://stackoverflow.com/questions/29759480/how-to-customize-object-equality-for-javascript-sets)

## Type parameters
#### T :  [IGeneralSetComparable](../interfaces/core.igeneralsetcomparable.md)
## Hierarchy

**GeneralSet**

## Index

### Methods

* [__@iterator](core.generalset.md#___iterator)
* [add](core.generalset.md#add)
* [values](core.generalset.md#values)

---

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`T`>

*Defined in [packages/core/src/helper/general-set.ts:11](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/helper/general-set.ts#L11)*

**Returns:** `IterableIterator`<`T`>

___
<a id="add"></a>

###  add

▸ **add**(...items: *`T`[]*): `void`

*Defined in [packages/core/src/helper/general-set.ts:15](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/helper/general-set.ts#L15)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` items | `T`[] |

**Returns:** `void`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<`T`>

*Defined in [packages/core/src/helper/general-set.ts:21](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/helper/general-set.ts#L21)*

**Returns:** `IterableIterator`<`T`>

___

