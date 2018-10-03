[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [AbstractDatabase](../classes/core.abstractdatabase.md)

# Class: AbstractDatabase

This class represents the base for database implementations. Plugin developers must use it to write their storage/retrieval logic using their database specific database driver. IMPORTANT: Please make sure to share one single AbstractDatabase object over all database configurations! You may want to use a singleton in your application. The reason is that the database object caches read requests and invalidates its cache once a write operation is performed. If you used more than one instance, this will result in an inconsistent application state because the cache of other database objects does not get invalidated after write operations on other instances.

## Type parameters
#### T 
## Hierarchy

**AbstractDatabase**

## Index

### Constructors

* [constructor](core.abstractdatabase.md#constructor)

### Properties

* [CACHE_INVALIDATION_EVENT](core.abstractdatabase.md#cache_invalidation_event)
* [NO_TENANT_ID](core.abstractdatabase.md#no_tenant_id)

### Accessors

* [cacheConfiguration](core.abstractdatabase.md#cacheconfiguration)
* [id](core.abstractdatabase.md#id)

### Methods

* [addHolidayDefinition](core.abstractdatabase.md#addholidaydefinition)
* [deleteHolidayDefinition](core.abstractdatabase.md#deleteholidaydefinition)
* [getHolidayDefinitions](core.abstractdatabase.md#getholidaydefinitions)
* [getLastModification](core.abstractdatabase.md#getlastmodification)
* [updateHolidayDefinition](core.abstractdatabase.md#updateholidaydefinition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AbstractDatabase**(_id: *`string`*, databaseCacheConfiguration?: *[IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md)*): [AbstractDatabase](core.abstractdatabase.md)

*Defined in [packages/core/src/database/abstract-database.ts:32](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L32)*

Create a new database instance. Only one instance per database should be created and assigned a unique id for the entire application.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| _id | `string` |  A unique object identifier; works as hash for the entire database object |
| `Optional` databaseCacheConfiguration | [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md) |  the database cache configuration to use - for caching behaviour and consistency |

**Returns:** [AbstractDatabase](core.abstractdatabase.md)

___

## Properties

<a id="cache_invalidation_event"></a>

### `<Static>` CACHE_INVALIDATION_EVENT

**● CACHE_INVALIDATION_EVENT**: *"cache_invalidation"* = "cache_invalidation"

*Defined in [packages/core/src/database/abstract-database.ts:26](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L26)*

___
<a id="no_tenant_id"></a>

### `<Static>` NO_TENANT_ID

**● NO_TENANT_ID**: *"__NO_TENANT__"* = "__NO_TENANT__"

*Defined in [packages/core/src/database/abstract-database.ts:27](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L27)*

___

## Accessors

<a id="cacheconfiguration"></a>

###  cacheConfiguration

getcacheConfiguration(): [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md)

*Defined in [packages/core/src/database/abstract-database.ts:128](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L128)*

**Returns:** [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md)

___
<a id="id"></a>

###  id

getid(): `string`

*Defined in [packages/core/src/database/abstract-database.ts:132](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L132)*

**Returns:** `string`

___

## Methods

<a id="addholidaydefinition"></a>

###  addHolidayDefinition

▸ **addHolidayDefinition**(holidayDefinition: *`T`*, tenant?: *[ITenant](../interfaces/core.itenant.md)*): `Promise`<`void`>

*Defined in [packages/core/src/database/abstract-database.ts:95](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayDefinition | `T` |
| `Optional` tenant | [ITenant](../interfaces/core.itenant.md) |

**Returns:** `Promise`<`void`>

___
<a id="deleteholidaydefinition"></a>

###  deleteHolidayDefinition

▸ **deleteHolidayDefinition**(holidayNameToDelete: *`string`*, tenant?: *[ITenant](../interfaces/core.itenant.md)*): `Promise`<`void`>

*Defined in [packages/core/src/database/abstract-database.ts:117](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayNameToDelete | `string` |
| `Optional` tenant | [ITenant](../interfaces/core.itenant.md) |

**Returns:** `Promise`<`void`>

___
<a id="getholidaydefinitions"></a>

###  getHolidayDefinitions

▸ **getHolidayDefinitions**(tenant?: *[ITenant](../interfaces/core.itenant.md)*): `Promise`<[IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]>

*Defined in [packages/core/src/database/abstract-database.ts:91](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` tenant | [ITenant](../interfaces/core.itenant.md) |

**Returns:** `Promise`<[IHolidayDefinitionInternal](../interfaces/core.iholidaydefinitioninternal.md)[]>

___
<a id="getlastmodification"></a>

###  getLastModification

▸ **getLastModification**(tenant?: *[ITenant](../interfaces/core.itenant.md)*):  `number` &#124; `undefined`

*Defined in [packages/core/src/database/abstract-database.ts:74](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` tenant | [ITenant](../interfaces/core.itenant.md) |

**Returns:**  `number` &#124; `undefined`

___
<a id="updateholidaydefinition"></a>

###  updateHolidayDefinition

▸ **updateHolidayDefinition**(holidayDefinition: *`T`*, tenant?: *[ITenant](../interfaces/core.itenant.md)*): `Promise`<`void`>

*Defined in [packages/core/src/database/abstract-database.ts:106](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/abstract-database.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| holidayDefinition | `T` |
| `Optional` tenant | [ITenant](../interfaces/core.itenant.md) |

**Returns:** `Promise`<`void`>

___

