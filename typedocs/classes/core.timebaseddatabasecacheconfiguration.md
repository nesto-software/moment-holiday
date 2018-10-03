[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [TimebasedDatabaseCacheConfiguration](../classes/core.timebaseddatabasecacheconfiguration.md)

# Class: TimebasedDatabaseCacheConfiguration

This is a database cache configuration for distributed applications. The cache is cleaned after a specified number of milliseconds. The cluster of distributed applications reaches consistency after the given number of milliseconds.

## Hierarchy

**TimebasedDatabaseCacheConfiguration**

## Implements

* [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md)

## Index

### Constructors

* [constructor](core.timebaseddatabasecacheconfiguration.md#constructor)

### Accessors

* [maxAgeInMs](core.timebaseddatabasecacheconfiguration.md#maxageinms)

### Methods

* [unregister](core.timebaseddatabasecacheconfiguration.md#unregister)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TimebasedDatabaseCacheConfiguration**(_maxAgeInMs?: *`number`*): [TimebasedDatabaseCacheConfiguration](core.timebaseddatabasecacheconfiguration.md)

*Defined in [packages/core/src/database/timebased-database-cache-configuration.ts:8](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/timebased-database-cache-configuration.ts#L8)*

Creates a time-based database cache configuration.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` _maxAgeInMs | `number` |

**Returns:** [TimebasedDatabaseCacheConfiguration](core.timebaseddatabasecacheconfiguration.md)

___

## Accessors

<a id="maxageinms"></a>

###  maxAgeInMs

getmaxAgeInMs(): `number`

*Defined in [packages/core/src/database/timebased-database-cache-configuration.ts:19](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/timebased-database-cache-configuration.ts#L19)*

**Returns:** `number`

___

## Methods

<a id="unregister"></a>

###  unregister

▸ **unregister**(): `void`

*Implementation of [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md).[unregister](../interfaces/core.idatabasecacheconfiguration.md#unregister)*

*Defined in [packages/core/src/database/timebased-database-cache-configuration.ts:15](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/timebased-database-cache-configuration.ts#L15)*

**Returns:** `void`

___

