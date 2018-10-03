[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [RedisDatabaseCacheConfiguration](../classes/core.redisdatabasecacheconfiguration.md)

# Class: RedisDatabaseCacheConfiguration

## Hierarchy

**RedisDatabaseCacheConfiguration**

## Implements

* [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md)

## Index

### Methods

* [getIncomingEventEmitter](core.redisdatabasecacheconfiguration.md#getincomingeventemitter)
* [getOutgoingEventEmitter](core.redisdatabasecacheconfiguration.md#getoutgoingeventemitter)
* [unregister](core.redisdatabasecacheconfiguration.md#unregister)
* [createAndSetupClient](core.redisdatabasecacheconfiguration.md#createandsetupclient)

---

## Methods

<a id="getincomingeventemitter"></a>

###  getIncomingEventEmitter

▸ **getIncomingEventEmitter**(): `EventEmitter`

*Defined in [packages/core/src/database/redis-database-cache-configuration.ts:64](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/redis-database-cache-configuration.ts#L64)*

**Returns:** `EventEmitter`

___
<a id="getoutgoingeventemitter"></a>

###  getOutgoingEventEmitter

▸ **getOutgoingEventEmitter**(): `EventEmitter`

*Defined in [packages/core/src/database/redis-database-cache-configuration.ts:68](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/redis-database-cache-configuration.ts#L68)*

**Returns:** `EventEmitter`

___
<a id="unregister"></a>

###  unregister

▸ **unregister**(): `void`

*Implementation of [IDatabaseCacheConfiguration](../interfaces/core.idatabasecacheconfiguration.md).[unregister](../interfaces/core.idatabasecacheconfiguration.md#unregister)*

*Defined in [packages/core/src/database/redis-database-cache-configuration.ts:52](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/redis-database-cache-configuration.ts#L52)*

Shuts down the redis connection entierly. After calling this method, the database cache behaves as if there was no cache configuration passed, i.e. (default mode). In default mode, the cache gets invalidated for application-local changes only.

**Returns:** `void`

___
<a id="createandsetupclient"></a>

### `<Static>` createAndSetupClient

▸ **createAndSetupClient**(redisClient: *`NodeRedisPubSub`*): [RedisDatabaseCacheConfiguration](core.redisdatabasecacheconfiguration.md)

*Defined in [packages/core/src/database/redis-database-cache-configuration.ts:77](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/redis-database-cache-configuration.ts#L77)*

Creates a redis connection based on the given redis client and creates the corresponding database cache object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| redisClient | `NodeRedisPubSub` |  the redis client to use - note: NRP can be configured to use a standard redis client |

**Returns:** [RedisDatabaseCacheConfiguration](core.redisdatabasecacheconfiguration.md)

___

