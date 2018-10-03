[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [DatabaseConfiguration](../classes/core.databaseconfiguration.md)

# Class: DatabaseConfiguration

This is a database configuration object. An api client uses an instance to specify that the core should load additional holiday definitions from a database.
*__param__*: the database engine to use - this class comes from a dedicated database plugin for moment holiday

*__param__*: the cache configuration for distributed applications which scale horizontally

*__param__*: the tenant is used to distinguish between different sets of holiday definitions in the database

## Type parameters
#### U 
#### T :  [AbstractDatabase](core.abstractdatabase.md)<`U`>
## Hierarchy

**DatabaseConfiguration**

## Index

### Constructors

* [constructor](core.databaseconfiguration.md#constructor)

### Accessors

* [database](core.databaseconfiguration.md#database)
* [tenant](core.databaseconfiguration.md#tenant)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DatabaseConfiguration**(_database: *`T`*, _tenant?: *[ITenant](../interfaces/core.itenant.md)*): [DatabaseConfiguration](core.databaseconfiguration.md)

*Defined in [packages/core/src/database/database-configuration.ts:12](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/database-configuration.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _database | `T` |
| `Optional` _tenant | [ITenant](../interfaces/core.itenant.md) |

**Returns:** [DatabaseConfiguration](core.databaseconfiguration.md)

___

## Accessors

<a id="database"></a>

###  database

getdatabase(): `T`

*Defined in [packages/core/src/database/database-configuration.ts:21](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/database-configuration.ts#L21)*

**Returns:** `T`

___
<a id="tenant"></a>

###  tenant

gettenant(): [ITenant](../interfaces/core.itenant.md)

*Defined in [packages/core/src/database/database-configuration.ts:17](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/database-configuration.ts#L17)*

**Returns:** [ITenant](../interfaces/core.itenant.md)

___

