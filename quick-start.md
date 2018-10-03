# Quick Start

## Installation _(Node Only)_

_Note that you must have node (and npm) installed._

### Requirements
* [moment.js](https://github.com/moment/moment) v2.0.0 or higher (peer-dependency)

We provide a plugin for moment. Thus we depend on moment being installed.

```bash
npm install moment -D
```

If you want to install it with [yarn](https://yarnpkg.com):

```bash
yarn add moment -D
```

### Install the library

```bash
npm install @nesto-software/moment-holiday -D
```

or with yarn:

```bash
yarn add @nesto-software/moment-holiday -D
```

### Plugins

**Database**:   
- MongoDB *(via Mongoose)* (@nesto-software/moment-holiday-database-mongoose)   
This requires mongoose *>=4.13.14* as peer-dependency.

Install the plugin for the database you use.
Visit the [database](concepts.md#database-integration) documentation to learn more about database integration in this library.

## Installation _(Browsers Only)_

> Note: There is no database support for the frontend!

There is an  [example repository](/browser.md) which demonstrates the installation with [webpack](https://webpack.js.org/).