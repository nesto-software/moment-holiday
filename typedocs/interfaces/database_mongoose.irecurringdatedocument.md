[Moment Holiday (by Nesto)](../README.md) > [database-mongoose](../modules/database_mongoose.md) > [IRecurringDateDocument](../interfaces/database_mongoose.irecurringdatedocument.md)

# Interface: IRecurringDateDocument

## Hierarchy

↳  [IAbstractDateDocument](database_mongoose.iabstractdatedocument.md)

 [IRecurringDate](database_mongoose.irecurringdate.md)

**↳ IRecurringDateDocument**

## Index

### Properties

* [__v](database_mongoose.irecurringdatedocument.md#__v)
* [base](database_mongoose.irecurringdatedocument.md#base)
* [baseModelName](database_mongoose.irecurringdatedocument.md#basemodelname)
* [collection](database_mongoose.irecurringdatedocument.md#collection)
* [day](database_mongoose.irecurringdatedocument.md#day)
* [db](database_mongoose.irecurringdatedocument.md#db)
* [discriminators](database_mongoose.irecurringdatedocument.md#discriminators)
* [id](database_mongoose.irecurringdatedocument.md#id)
* [modelName](database_mongoose.irecurringdatedocument.md#modelname)
* [month](database_mongoose.irecurringdatedocument.md#month)
* [schema](database_mongoose.irecurringdatedocument.md#schema)

### Methods

* [addListener](database_mongoose.irecurringdatedocument.md#addlistener)
* [deserialize](database_mongoose.irecurringdatedocument.md#deserialize)
* [emit](database_mongoose.irecurringdatedocument.md#emit)
* [eventNames](database_mongoose.irecurringdatedocument.md#eventnames)
* [getMaxListeners](database_mongoose.irecurringdatedocument.md#getmaxlisteners)
* [increment](database_mongoose.irecurringdatedocument.md#increment)
* [listenerCount](database_mongoose.irecurringdatedocument.md#listenercount)
* [listeners](database_mongoose.irecurringdatedocument.md#listeners)
* [model](database_mongoose.irecurringdatedocument.md#model)
* [off](database_mongoose.irecurringdatedocument.md#off)
* [on](database_mongoose.irecurringdatedocument.md#on)
* [once](database_mongoose.irecurringdatedocument.md#once)
* [prependListener](database_mongoose.irecurringdatedocument.md#prependlistener)
* [prependOnceListener](database_mongoose.irecurringdatedocument.md#prependoncelistener)
* [rawListeners](database_mongoose.irecurringdatedocument.md#rawlisteners)
* [remove](database_mongoose.irecurringdatedocument.md#remove)
* [removeAllListeners](database_mongoose.irecurringdatedocument.md#removealllisteners)
* [removeListener](database_mongoose.irecurringdatedocument.md#removelistener)
* [save](database_mongoose.irecurringdatedocument.md#save)
* [setMaxListeners](database_mongoose.irecurringdatedocument.md#setmaxlisteners)

---

## Properties

<a id="__v"></a>

### `<Optional>` __v

**● __v**: *`number`*

*Inherited from Document.__v*

*Defined in node_modules/@types/mongoose/index.d.ts:2720*

Version using default version key. See [http://mongoosejs.com/docs/guide.html#versionKey](http://mongoosejs.com/docs/guide.html#versionKey) If you're using another key, you will have to access it using \[\]: doc\[_myVersionKey\]

___
<a id="base"></a>

###  base

**● base**: *`&quot;mongoose&quot;`*

*Inherited from ModelProperties.base*

*Defined in node_modules/@types/mongoose/index.d.ts:2740*

Base Mongoose instance the model uses.

___
<a id="basemodelname"></a>

###  baseModelName

**● baseModelName**: * `string` &#124; `undefined`
*

*Inherited from ModelProperties.baseModelName*

*Defined in node_modules/@types/mongoose/index.d.ts:2746*

If this is a discriminator model, baseModelName is the name of the base model.

___
<a id="collection"></a>

###  collection

**● collection**: *`Collection`*

*Inherited from ModelProperties.collection*

*Defined in node_modules/@types/mongoose/index.d.ts:2749*

Collection the model uses.

___
<a id="day"></a>

###  day

**● day**: *`number`*

*Inherited from [IRecurringDate](database_mongoose.irecurringdate.md).[day](database_mongoose.irecurringdate.md#day)*

*Defined in [packages/database-mongoose/src/schemas/interfaces/recurring-date.interface.ts:4](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/database-mongoose/src/schemas/interfaces/recurring-date.interface.ts#L4)*

___
<a id="db"></a>

###  db

**● db**: *`Connection`*

*Inherited from ModelProperties.db*

*Defined in node_modules/@types/mongoose/index.d.ts:2752*

Connection the model uses.

___
<a id="discriminators"></a>

###  discriminators

**● discriminators**: *`any`*

*Inherited from ModelProperties.discriminators*

*Defined in node_modules/@types/mongoose/index.d.ts:2755*

Registered discriminators for this model.

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`any`*

*Inherited from MongooseDocumentOptionals.id*

*Defined in node_modules/@types/mongoose/index.d.ts:1190*

Virtual getter that by default returns the document's _id field cast to a string, or in the case of ObjectIds, its hexString. This id getter may be disabled by passing the option { id: false } at schema construction time. If disabled, id behaves like any other field on a document and can be assigned any value.

___
<a id="modelname"></a>

###  modelName

**● modelName**: *`string`*

*Inherited from ModelProperties.modelName*

*Defined in node_modules/@types/mongoose/index.d.ts:2758*

The name of the model

___
<a id="month"></a>

###  month

**● month**: *`number`*

*Inherited from [IRecurringDate](database_mongoose.irecurringdate.md).[month](database_mongoose.irecurringdate.md#month)*

*Defined in [packages/database-mongoose/src/schemas/interfaces/recurring-date.interface.ts:5](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/database-mongoose/src/schemas/interfaces/recurring-date.interface.ts#L5)*

___
<a id="schema"></a>

###  schema

**● schema**: *`Schema`*

*Inherited from ModelProperties.schema*

*Defined in node_modules/@types/mongoose/index.d.ts:2761*

Schema the model uses.

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in node_modules/@types/node/index.d.ts:577*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(): [AbstractDate](../classes/_node_modules__nesto_software_moment_holiday_core_src_date_abstract_date_.abstractdate.md)

*Inherited from [IDeserializable](database_mongoose.ideserializable.md).[deserialize](database_mongoose.ideserializable.md#deserialize)*

*Defined in [packages/database-mongoose/src/deserializable.interface.ts:2](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/database-mongoose/src/deserializable.interface.ts#L2)*

**Returns:** [AbstractDate](../classes/_node_modules__nesto_software_moment_holiday_core_src_date_abstract_date_.abstractdate.md)

___
<a id="emit"></a>

###  emit

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Defined in node_modules/@types/node/index.d.ts:587*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`< `string` &#124; `symbol`>

*Inherited from EventEmitter.eventNames*

*Defined in node_modules/@types/node/index.d.ts:592*

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Defined in node_modules/@types/node/index.d.ts:584*

**Returns:** `number`

___
<a id="increment"></a>

###  increment

▸ **increment**(): `this`

*Inherited from Document.increment*

*Defined in node_modules/@types/mongoose/index.d.ts:2692*

Signal that we desire an increment of this documents version.

**Returns:** `this`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in node_modules/@types/node/index.d.ts:588*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Defined in node_modules/@types/node/index.d.ts:585*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="model"></a>

###  model

▸ **model**(name: *`string`*): `Model`<`this`>

*Inherited from Document.model*

*Defined in node_modules/@types/mongoose/index.d.ts:2698*

Returns another Model instance.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  model name |

**Returns:** `Model`<`this`>

___
<a id="off"></a>

###  off

▸ **off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Defined in node_modules/@types/node/index.d.ts:581*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Defined in node_modules/@types/node/index.d.ts:578*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Defined in node_modules/@types/node/index.d.ts:579*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Defined in node_modules/@types/node/index.d.ts:590*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Defined in node_modules/@types/node/index.d.ts:591*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Defined in node_modules/@types/node/index.d.ts:586*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="remove"></a>

###  remove

▸ **remove**(fn?: *`function`*): `Promise`<`this`>

*Inherited from Document.remove*

*Defined in node_modules/@types/mongoose/index.d.ts:2704*

Removes this document from the db.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` fn | `function` |  optional callback |

**Returns:** `Promise`<`this`>

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in node_modules/@types/node/index.d.ts:582*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Defined in node_modules/@types/node/index.d.ts:580*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="save"></a>

###  save

▸ **save**(options?: *`SaveOptions`*, fn?: *`function`*): `Promise`<`this`>

▸ **save**(fn?: *`function`*): `Promise`<`this`>

*Inherited from Document.save*

*Defined in node_modules/@types/mongoose/index.d.ts:2713*

Saves this document.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `SaveOptions` |  options optional options |
| `Optional` fn | `function` |  optional callback |

**Returns:** `Promise`<`this`>

*Inherited from Document.save*

*Defined in node_modules/@types/mongoose/index.d.ts:2714*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `function` |

**Returns:** `Promise`<`this`>

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Defined in node_modules/@types/node/index.d.ts:583*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___

