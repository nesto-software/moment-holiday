[Moment Holiday (by Nesto)](../README.md) > [core](../modules/core.md) > [InTag](../classes/core.intag.md)

# Class: InTag

## Hierarchy

↳  [MultivalueTag](core.multivaluetag.md)< [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md)>

**↳ InTag**

## Index

### Constructors

* [constructor](core.intag.md#constructor)

### Accessors

* [values](core.intag.md#values)

### Methods

* [addValue](core.intag.md#addvalue)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new InTag**(_tagOrTags: * [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md) &#124; `Array`< [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md)>*): [InTag](core.intag.md)

*Overrides [MultivalueTag](core.multivaluetag.md).[constructor](core.multivaluetag.md#constructor)*

*Defined in [packages/core/src/tag/in-tag.ts:5](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/tag/in-tag.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _tagOrTags |  [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md) &#124; `Array`< [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md)>|

**Returns:** [InTag](core.intag.md)

___

## Accessors

<a id="values"></a>

###  values

getvalues(): `T`[]

*Inherited from [MultivalueTag](core.multivaluetag.md).[values](core.multivaluetag.md#values)*

*Defined in [packages/core/src/tag/multivalue-tag.ts:20](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/tag/multivalue-tag.ts#L20)*

**Returns:** `T`[]

___

## Methods

<a id="addvalue"></a>

###  addValue

▸ **addValue**(value: * [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md)*): `void`

*Inherited from [MultivalueTag](core.multivaluetag.md).[addValue](core.multivaluetag.md#addvalue)*

*Defined in [packages/core/src/tag/multivalue-tag.ts:16](https://github.com/nesto-software/moment-holiday/blob/c39e49d/packages/core/src/tag/multivalue-tag.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [StateTag](core.statetag.md) &#124; [CountryTag](core.countrytag.md)|

**Returns:** `void`

___

