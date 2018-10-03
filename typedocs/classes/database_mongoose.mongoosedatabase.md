[Moment Holiday (by Nesto)](../README.md) > [database-mongoose](../modules/database_mongoose.md) > [MongooseDatabase](../classes/database_mongoose.mongoosedatabase.md)

# Class: MongooseDatabase

The mongoose database module for moment-holiday. Please note that you must setup mongoose globally before using this class.

## Hierarchy

↳  [MongooseDatabase](database_mongoose.mongoosedatabase.md)<[IHolidayDefinition](../interfaces/database_mongoose.iholidaydefinition.md)>

**↳ MongooseDatabase**

↳  [MongooseDatabase](database_mongoose.mongoosedatabase.md)

## Index

### Constructors

* [constructor](database_mongoose.mongoosedatabase.md#constructor)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MongooseDatabase**(databaseId: *`string`*, collectionName: *`string`*, databaseCacheConfiguration?: *[IDatabaseCacheConfiguration](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_database_database_cache_configuration_interface_.idatabasecacheconfiguration.md)*): [MongooseDatabase](database_mongoose.mongoosedatabase.md)

*Defined in [packages/database-mongoose/src/mongoose-database.ts:24](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/database-mongoose/src/mongoose-database.ts#L24)*

Creates a new instance of the mongoose database plugin. IMPORTANT: Set up mongoose globally before initializing this class.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| databaseId | `string` |  the identifier for this datbase object - there must be only one database object with this id |
| collectionName | `string` |
| `Optional` databaseCacheConfiguration | [IDatabaseCacheConfiguration](../interfaces/_node_modules__nesto_software_moment_holiday_core_src_database_database_cache_configuration_interface_.idatabasecacheconfiguration.md) |

**Returns:** [MongooseDatabase](database_mongoose.mongoosedatabase.md)

___

