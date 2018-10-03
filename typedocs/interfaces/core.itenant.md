[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [ITenant](../interfaces/core.itenant.md)

# Interface: ITenant

This interface represents a tenant for the database. The api can return different holiday definitions from database. The database query searches for holiday definitions which belong to a given tenant.

## Hierarchy

**ITenant**

## Implemented by

* [StandardTenant](../classes/core.standardtenant.md)

## Index

### Methods

* [getIdentifier](core.itenant.md#getidentifier)

---

## Methods

<a id="getidentifier"></a>

###  getIdentifier

▸ **getIdentifier**(): `string`

*Defined in [packages/core/src/database/tenant.interface.ts:11](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/database/tenant.interface.ts#L11)*

A string which is used to identify tenants in the database. The returned value must be globally unique.

**Returns:** `string`

___

