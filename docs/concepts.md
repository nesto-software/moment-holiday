# Concepts

## Database Integration 
A system which allows customization by the user needs a storage solution.
We decided to implement a generic database interface and to allow the community to write their own database plugins.

Currently, we support MongoDB with Mongoose *(not the native driver)*.
The reason behind using Mongoose is, that we want to avoid writing business logic boilerplate.
All entities are mapped to classes. This makes it easy to create a well-documented and intuitive API.

[Click here](/typedocs/modules/database_mongoose.md) to see the API docs. If you do not know how to start: There are some [examples](examples/database.md#mongoose-mongodb).

> Database Integration is currently a `BETA` feature. There is no test coverage for the database package yet.

### What is written to the database? 
The [HolidayDefinition entity](#holidaydefinition) is stored inside the database.

### How does database integration affect the library performance? 
The library provides different caching strategies in order to minimize the impact of database interactions.
For more information on how this is accomplished, [visit the caching section](#caching).

### What are the differences in API usage? 
You enable the database by providing a `DatabaseConfiguration` object to the [MomentHoliday](#momentholiday) object.

```js
import * as mongooseDatabase from "@nesto-software/moment-holiday-database-mongoose";
import { DatabaseConfiguration } from "@nesto-software/moment-holiday-core";
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";

const holidays = createMomentHolidayConfiguration("DE", "BW");
const db = ...  // e.g. new MongooseDatabase("myDb", "holidayDefinitions")
const dbConfiguration = new DatabaseConfiguration(db);
const holidaysWithDbIntegration = holidays.withDatabase(dbConfiguration);
```

The holidays object is of type `SyncMomentHoliday` whereas the holidaysWithDbIntegration object is of type `AsyncMomentHoliday`.
The difference between them is that all methods of the object with database integration return a Promise.
In order to keep the library simple for clients which do not want to use database integration, the other (standard) type does not return a Promise.
For more information, please [visit the docs for AbstractMomentHoliday](/typedocs/classes/api.abstractmomentholiday.md) and its subclasses.

### What is tenancy? 
We support multi-tenancy. That is, we store holiday definitions for different clients into the database.
This is useful if your software has multiple customers and you want to allow each of them to store their own holiday definitions into the same database.

```js
import { DatabaseConfiguration, StandardTenant } from "@nesto-software/moment-holiday-core";
[...]
const db = ...
const tenant = new StandardTenant("Customer1");

// now configure the database to load holiday definitions for the given tenant only
const dbConfiguration = new DatabaseConfiguration(db, tenant);
const holidaysWithDbIntegration = holidays.withDatabase(dbConfiguration);
```

> If you do not specify a tenant, a tenant with name *\__NO_TENANT__* is assigned.
> You must not use *\__NO_TENANT__* as tenant name. The tenant name must not start with *__*.

## Caching 
We decided to implement some caching techniques in order to trade memory against a runtime benefit.
We believe that a holiday library should focus on good runtime performance as it should support as many queries per second as possible.

### Strategy 
We assume that holiday definitions are immutable. 
Furthermore, we assume that the set of holiday definitions which is used by a concrete moment-holiday configuration is immutable.
This allows us to cache concrete holiday computations. Thus, holiday definitions must be resolved only once for a particular year.

### Efficiency 
The efficiency of the caching strategy relies on the assumption that there are a lot of queries for holidays in the same year.
We are going to provide some concrete numbers on how much time we save on subsequent, cached queries, soon.

### Implementation 
We use the [mem](https://github.com/sindresorhus/mem) function cache.
> An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

### Database Integration and Horizontal Scaling 
Caching becomes an even more important topic when it comes to database integration.
We do not want to hit the database every time we query holiday definitions.
Moreover, our assumption that the set of holiday definitions for a given moment-holiday configuration is immutable does not hold anymore with database integration.
The client could insert a new holiday definition any time. This must result in a cache invalidation.

We solved this issue by caching the holiday resolutions as before until a write operation on the database is performed for a particular tenant.
Once a tenant performs a write operation, the corresponding tenant cache is invalidated.
This allows us to reduce the amount of database queries significantly.

This works fine if the application does not scale horizontally because the application knows about every database write operation which is performed over the library.
But when it comes to horizontally scaling the application, i.e. running the libary across multiple servers concurrently, we must introduce another strategy to guarantee consistency.
Otherwise a write operation on one server does not invalidate the cache on another server. This would result in an unconsistent cluster state.

We provide an entity called [DatabaseCacheConfiguration](/typedocs/interfaces/core.idatabasecacheconfiguration.md).
It is passed (optionally) to the concrete database class and controls the cache invalidation.
The following caching strategies for database integrations exist:

- No Horizontal Scale Out *Strong Consistency*   
You must not provide any database cache configuration to the database.
The database registers a local cache invalidation listener which works well if the application is hosted on a single server.
- RedisDatabaseCacheConfiguration *Strong Consistency*   
Uses the Redis publish-subscribe mechanism to notify all applications whenever a write operation is performed.
This solves the distributed cache invalidation issue completely but requires that you set up a redis server.
This is the preferred method if your application scales out horizontally.
- TimebasedDatabaseCacheConfiguration *Eventual Consistency*   
This configuration sets the *maxAge* attribute on the mem-cache. This causes the cache to be invalidated after the given period of time.
It means that the cluster is in a consistent state after a write operation no later than the number of seconds given by *maxAge*.
You can chose this configuration if you want to trade consistency against performance. 
This strategy is not recommended for systems which must reflect a change instantaneously across all servers.
- DisabledDatabaseCacheConfiguration *Strong Consistency*   
The cache is disabled completely. The database is hit for each moment-holiday operation.
This configuration results in the worst performance but provides strong consistency across all instances of the library.
If you consider enabling this configuration, think twice if you do not want to switch to the RedisDatabaseCacheConfiguration strategy.
However, if there are only a few library invokations per minute you might also stick to this configuration.

## Tagging 
We believe a holiday library should grant the ability to assign extra information to specific holidays.
This is particularly useful for applications which implement financial logic such as payroll computations.
Tags can be used to group holidays together across different country locales.

### Tag Types 
- `BooleanTag`:
Typically used to group holidays together
- `EnumTag`:
Maps a single value to a holiday
- `MultivalueTag`:
Maps multiple values to a holiday

### Common Tags 
- `InTag`   
Contains the country of the state the holiday is defined in (*iff holiday belongs to a state or region*). Also contains the state of the region the holiday is defined in (*iff holiday belongs to a region*).
- `UserDefinedTag`   
Is set if the holiday was defined by the client and loaded from database.
- `LateTag`   
Is set if the holiday starts late. This is defined by public law.
- `SpecialSurchargeGastroDayTag`   
Is set for days which are payed a surcharge according to special contracts in the german [gastronomy](https://www.bundesverband-systemgastronomie.de/de/tarifvertraege.html).
- `CountryTag`   
Is set if the holiday is defined by the country.
- `StateTag`   
Is set if the holiday is defined by the state.
- `RegionTag`   
Is set if the holiday is defined by the region.
- `ReligionTag`   
Contains all religios groups for which a holiday applies to. There are some countries (such as Austria) whose holidays apply to people of particular denominations. 
- `LegislationTag`   
Contains a reference to the legislation which defines the public holiday.
- `TypeTag`   
States whether a holiday is defined by public law or by observance.

## Holiday Resolution 
The library implements a holiday resolution strategy which computes holidays per year.
If you want to check if a given day (e.g. 25.12.2018) is a holiday, then we resolve every holiday definition for the year of the given day (2018 in this example).
Subsequently, we check if the given day matches one of the holidays.

In order to provide a good performance with this resolution strategy, we use [caching](#caching).

### Why you do not use a simpler strategy for holiday resolution? 
There are some [special date types](#special-date-types) which are not straightforward to compute.
This is for example the [EasterDependentDate](#easterdependentdate) type. Some holidays depend on the easter date.

## Core Entities 
The following is a collection of the most important entities in this library.

### MomentHoliday 
The moment-holiday object is a configuration holder. You initialize it using a [factory method](/typedocs/modules/api.md#momentholidayfactorymethod).
You must define which holiday definitions should be concerned.
You do this by passing two parameters:   
The first parameter must be a valid [CountryIdentifier](/typedocs/modules/api.md#countryidentifier).
The second is a rest parameter (which means you may pass none, one or even multiple ones) which describes a valid [AdministrativeUnit](#hierarchy).
We use typescript string literals to provide valid values for these parameters. Your IDE should tell you if a given string is a valid identifier if you configured typescript properly.

```js
// create a moment-holiday configuration for the state Bavaria in Germany
const holidays = createMomentHolidayConfiguration("DE", "BY");

// create a moment-holiday configuration for the city Augsburg in Bavaria / Germany
const holidays = createMomentHolidayConfiguration("DE", "BY", "AUG");
```

> Even if a city is in a particular state, you must pass the city's state identifier to the factory method (see example above).
> Otherwise the state holidays are not included.

### Hierarchy 
We chose a hierarchic structure for the country model.   
A locale package exposes a [country](/typedocs/classes/core.country.md).
The country consists of multiple so called [administrative units](/typedocs/classes/core.abstractadministrativeunit.md).
An administrative unit can be a state or a region (e.g. a city which has its own holidays).

The library merges the holiday definitions of the country and the administrative units which were provided to the [MomentHoliday](#momentholiday) object.
If there are conflicting definitions with the same holiday name, then they take precedence in the following order: custom client definitions (via database), country definitions, administrative unit definitions.
We think that this reflects the legal order in most countries with federal states.

### Holiday 
A holiday is the occurence of a holiday definition for a specific year.
It consists of a concrete date which is returned as a moment object and the corresponding [HolidayDefinition](#holidaydefinition).

```js
Holiday {
  resolvedDate: moment("2018-12-31T00:00:00.000"),
  holidayDefinition:
   HolidayDefinition {
     _name: "New Year's Eve",
     _date: RecurringDate { day: 31, month: 11 },
     _tags:
      Map {
        'TypeTag' => [Object],
        'LateTag' => LateTag {},
        'SpecialSurchargeDayTag' => SpecialSurchargeDayTag {},
        'CountryTag' => [Object] } } }
```

### HolidayDefinition 
A holiday definition is the abstract specification of a holiday.
It consists of a holiday name which must be unique for a specific locale, a date and a map with tags.

The date field specifies when the holiday occurs. There are [special types of dates](#special-date-types) which can be used to define holiday recurrences.

The tags field is used to group holidays and to add extra information which might be useful for the user. For more information, [click here](#tagging).

```js
{
    name: HolidayName.CHRISTMAS,
    date: new RecurringDate(25, 11),    // December = 11
    tags: [
        new SpecialSurchargeDayTag(),
        new TypeTag(TypeTagValue.PUBLIC),
        new LegislationTag(this.someLaw),
    ],
}
```

### Tag
A tag is used to group holidays together.
You can obtain the tags for a holiday by using its `getTags()` method:

```js
const holiday: Holiday = ...
const tags: AbstractTag[] = Array.from(holiday.getTags());
```

You can query a specific type of tag by using the `getTag()` method:

```js
// import the type of tag you want to obtain
// tags are located in the core package
// locales might specify its own tags
// locale tags are exported via the api package
import { TypeTag } from "@nesto-software/moment-holiday-core";

const holiday: Holiday = ...
const typeTag: TypeTag = holiday.getTag(TypeTag);

// check if a TypeTag exists on this holiday
if(typeTag) {
    console.log(tag.value);     // see: TypeTagValue
}
```

For an overview of common tags, [visit the tagging section](#tagging).

### Special Date Types 
The library provides the following special date types which are used to specify when a holiday occurs.
You can find an overview if you [visit the docs for AbstractDate](/typedocs/classes/core.abstractdate.md).
 
> Dates must resolve deterministically. The [caching strategy](#caching) is based on the assumption that holiday definitions always resolve
> at the same day for a given year. You must not implement (pseudo-) randomizing predicates or resolvers.

#### RecurringDate 
This is the simplest and straightforward date type.
It defines a holiday which recurs each year at the same day and month.

```js
// Christmas is every year December 25th
new RecurringDate(25, 11)   // month is zero based
```

#### EasterDependentDate 
This type is used to define dates which are relative to the easter date.
This applies for example to the floating sunday holiday *Easter*:

```js
// resolves at the easter date each year
new EasterDependentDate(0)  // easter is 0 days after easter ;)
```

#### NonRecurringDate 
This type resolves in some years only, but always at the same day and month.
The *Reformation Day* in Germany is an example of a holiday which is non recurring.
It was defined as a federal holiday for 2017 only ([see German Wikipedia](https://de.wikipedia.org/wiki/Reformationstag#Gesetzliche_Stellung_als_Feiertag_oder_schulfreier_Tag)).

```js
// define the resolution via a predicate
NonRecurringDate.forPredicate(31, 9, (year) => year === 2017);

// or alternatively via an array
// this is the preferred method for simple cases
NonRecurringDate.forYears(31, 9, [2017]);
```

#### PeriodicInYearDate 
There are some edge cases in which you want to have the most flexibility and define a custom resolver.
If you want to specify holidays which resolve differently each year, you should use this date type.

It can return none, one or multiple occurences of a holiday for a specific year.

```js
// e.g. set each Friday 13th as holiday
PeriodicInYearDate.withResolver((year) => {
    const dates: Moment[] = [];
    const startOfYear = moment({
        d: 0,
        m: 0,
        year,
    });

    for (const currentDay = startOfYear; currentDay.year() === year; currentDay.add(1, "day")) {
        if (currentDay.day() === 5 && currentDay.date() === 13) {
            dates.push(moment(currentDay));
        }
    }

    return dates;
}),
```

Another example is the so called `Bus- und Bettag` in Germany.   
The holiday occurs every Wednesday before the 23rd November.

```js
PeriodicInYearDate.withResolver((year) => {
    const date = moment({
        day: 23,
        month: 10,  // 10 == November
        year,
    });

    // get the Wednesday before the 23rd November (i.e. the preceding Wednesday)
    return date.day(date.day() >= 3 ? 3 : -4);
})
```

### Moment 
We extend the global moment namespace.
The only thing you have to do is, importing the moment-holiday package.

```js
import moment from "moment";
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";
const holidays = createMomentHolidayConfiguration("DE", "BW");

// use isHoliday method provided by moment-holiday
moment().isHoliday(holidays);   // returns true if today is a holiday in Germany/BW
```

There are some more methods exposed on the moment object. For a complete list, [visit the API docs](/typedocs/interfaces/api._moment_.moment.md).

> You must not import more than one moment package in your application.
> Most 'method not found errors' originate from multiple moment objects being imported.