[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [DatabaseError](../classes/core.databaseerror.md)

# Class: DatabaseError

## Hierarchy

 `Error`

**↳ DatabaseError**

## Index

### Constructors

* [constructor](core.databaseerror.md#constructor)

### Properties

* [message](core.databaseerror.md#message)
* [name](core.databaseerror.md#name)
* [stack](core.databaseerror.md#stack)
* [Error](core.databaseerror.md#error)

### Methods

* [getCause](core.databaseerror.md#getcause)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DatabaseError**(cause: *`Error`*): [DatabaseError](core.databaseerror.md)

*Defined in [packages/core/src/database/database-error.ts:1](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/database-error.ts#L1)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cause | `Error` |

**Returns:** [DatabaseError](core.databaseerror.md)

___

## Properties

<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from Error.message*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:904*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:903*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:905*

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:914*

___

## Methods

<a id="getcause"></a>

###  getCause

▸ **getCause**(): `Error`

*Defined in [packages/core/src/database/database-error.ts:9](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/database-error.ts#L9)*

**Returns:** `Error`

___

