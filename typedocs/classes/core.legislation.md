[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [Legislation](../classes/core.legislation.md)

# Class: Legislation

The law which defines/mentions the holiday.

## Hierarchy

**Legislation**

## Index

### Constructors

* [constructor](core.legislation.md#constructor)

### Accessors

* [name](core.legislation.md#name)
* [reference](core.legislation.md#reference)
* [url](core.legislation.md#url)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Legislation**(_name: *`string`*, _url?: *`UrlWithStringQuery`*, _reference?: *`string`*): [Legislation](core.legislation.md)

*Defined in [packages/core/src/legislation.ts:6](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/legislation.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _name | `string` |
| `Optional` _url | `UrlWithStringQuery` |
| `Optional` _reference | `string` |

**Returns:** [Legislation](core.legislation.md)

___

## Accessors

<a id="name"></a>

###  name

getname(): `string`

*Defined in [packages/core/src/legislation.ts:14](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/legislation.ts#L14)*

Returns the name of the law.

**Returns:** `string`

___
<a id="reference"></a>

###  reference

getreference(): `string`

*Defined in [packages/core/src/legislation.ts:28](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/legislation.ts#L28)*

Returns the paragraph which defines the holiday.

**Returns:** `string`

___
<a id="url"></a>

###  url

geturl(): `UrlWithStringQuery`

*Defined in [packages/core/src/legislation.ts:21](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/legislation.ts#L21)*

Returns the url where you can find the document on the web.

**Returns:** `UrlWithStringQuery`

___

