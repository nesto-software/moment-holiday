# Database Examples

## Mongoose / MongoDB

> Database Support is currently BETA!

We will provide some more examples soon.

### Minimal Working Examples

#### Setup

Do not forget to install mongoose as a peer-dependency!
For the following example to work, first start mongo db locally on port 27017 (default).

The database `moment-holiday` is used to store the holiday definitions.
The collection is named `holidayDefinitions`.
The library identifier for the database is `myDbId`. It is used for caching purposes.
The tenant which is targeted is `MyCustomer1`.

```js
import * as mongoose from "mongoose";
//import NRP = require("node-redis-pubsub");    // optionally: for strong consistency
import MongooseDatabase from "@nesto-software/moment-holiday-database-mongoose";
import {
    DatabaseConfiguration,
//    RedisDatabaseCacheConfiguration,          // optionally: for strong consistency
    StandardTenant,
} from "@nesto-software/moment-holiday-core";
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";

// do not forget to set the async context
(async () => {
    (mongoose as any).Promise = global.Promise;
    await mongoose.connect("mongodb://localhost/moment-holiday?socketTimeoutMS=10000", (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log("Connected");
        }
    });

    // enable debug if you want to see if caching works
    //mongoose.set("debug", true);

    // use could use NRP for strong consistency
    //const redisClient = NRP({});  // download redis and start with default port on localhost
    const cacheConfiguration = undefined;   // you could use: RedisDatabaseCacheConfiguration.createAndSetupClient(redisClient)
    const database = new MongooseDatabase("myDbId", "holidayDefinitions", cacheConfiguration);
    const tenant = new StandardTenant("MyCustomer1");
    const databaseConfiguration = new DatabaseConfiguration(database, tenant);
    const holidaysWithDb = createMomentHolidayConfiguration("DE").withDatabase(databaseConfiguration);

    // now we can query holidays from database
    const holidays2018 = await holidaysWithDb.in(2018);
})();
```

#### Insert Holiday Definition With Custom Tag

The following is an example how to create and insert custom tags.

```js
// imports from example above
...
import { tagsPath } from "@nesto-software/moment-holiday-database-mongoose";
import { 
    EasterDependentDateModel,
    IEasterDependentDate,
    IHolidayDefinition,
    tagsDiscriminatorKey,
} from "@nesto-software/moment-holiday-database-mongoose";
import {
    AbstractTag,
    EnumTag,
} from "@nesto-software/moment-holiday-core";

const database = ...    // see above

// the tag class implementation (business logic)
class MyTag extends EnumTag { 
    constructor(private readonly myValue: string)
}

// the tag schema
const myTagSchema = new mongoose.Schema(
    {
        myValue: {
            type: String,
            required: true,
        },
    },
    {
        discriminatorKey: tagsDiscriminatorKey,
        _id: false,
    },
);

// this method tells how to deserialize the mongoose class into the business logic above
myTagSchema.methods.deserialize = (): AbstractTag => {
    return new MyTag(myValue);
};

// the interface for the mongoose model
interface IMyTag extends mongoose.Document {
    myValue: string;
}

// the mongoose model which maps business logic to persistence
// register as early as possible - before any database interaction happens!!
const MyTagModel: mongoose.Model<IMyTag> = (tagsPath as any).discriminator("MyTag", myTagSchema);

// add a holiday definition with the custom tag
await database.addHolidayDefinition({
    name: "MyHoliday",
    date: new EasterDependentDateModel({
        offset: 2,
    } as IEasterDependentDate),
    tags: [new MyTagModel({
        myValue: "test1234",
    } as IMyTag)],
} as IHolidayDefinition, tenant);
```