# Contributing
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Getting Started

Check out the code and go into the moment-holiday directory:

```bash
git clone https://gitlab.com/nesto-software/moment-holiday.git
cd moment-holiday
```

Install the dependencies and bootstrap the monorepo:

```bash
npm run dev-install
npm run compile
```

The code for individual packages of this monorepo are in `packages/*`.
Within any of the packages in this monorepo you'll generally use the npm
package scripts to manage the project, E.g. `npm run test` or
`npm run lint`. Run `npm run` for a list of available commands.

## Running Tests

To run the test suite, from the root directory run:

```bash
npm test
```

If you want to the tests to be rerun when any changes are made to the src or test files use:

```bash
npm test -- --watch
```

If you use [vscode](https://code.visualstudio.com/) and you want to debug your test code, use the `Debug Unit Tests` run configuration.

## Running Docs

All the `docsify` documentation can be found in the root level `docs` directory. Running
the following command will stand up the docs server which will watch for
changes.

```bash
npm run docs:serve
```

## Creating Typescript Docs

As we use typescript, we want to provide an additional documentation for public modules - the so called *API docs*.   
The following command is used to create the typedocs:

```bash
npm run typedoc:create
```

The typedoc documentation is based on your tsdoc comments. So make sure to comment public methods properly!

## Packages
### Core

This package contains core entities which describe holidays. Some of the important ones are:

- [Holiday](/gh-pages/classes/core.holiday.md)
- [Holiday Definition](/gh-pages/interfaces/core.iholidaydefinition.md)
- [Abstract Tag](/gh-pages/classes/core.abstracttag.md)

[![docs](https://img.shields.io/badge/api%20docs%20with-TypeDoc-blue.svg?longCache=true&style=for-the-badge )](/gh-pages/modules/core.md)

### API

This package is the entry point for using the moment-holiday API.   
You should  import its [factory method](/gh-pages/modules/api.md#momentholidayfactorymethod) as default import.   
Important entities contain:

- [Ambient Declarations for Moment](/gh-pages/interfaces/api._moment_.moment.md)
- [Synchronous Moment Holiday](/gh-pages/classes/api.syncmomentholiday.md)
- [Moment Holiday with Database Support](/gh-pages/classes/api.asyncmomentholiday.md)

There are two similar moment-holiday APIs.   
The synchronous ('simplified') moment-holiday API does not use database modules and thus does not support client specific holiday definitions.
The synchronous API does not use Promises at all.   
The asynchronous ('database') moment-holiday API uses database modules. Its methods return a promise.

[![docs](https://img.shields.io/badge/api%20docs%20with-TypeDoc-blue.svg?longCache=true&style=for-the-badge )](/gh-pages/modules/api.md)

### Locales

This folder contains multiple packages with holiday definitions for different countries.   
You should never depend on a locale package directly. The locale's public entities are exposed through the API package.

### Database
#### MongoDB (Mongoose)

This package provides a MongoDB database plugin for moment-holiday.   
It depends on the [Mongoose ODM](https://mongoosejs.com/).

You can use it to store holiday definitions in a database. The library loads definitions from the mongo database.

[![docs](https://img.shields.io/badge/api%20docs%20with-TypeDoc-blue.svg?longCache=true&style=for-the-badge )](/gh-pages/modules/database_mongoose.md)

## Development Notes
The project is maintained by lerna. In order to make it easier for people who are not
familiar with lerna, there are root level npm scripts to use.

- `npm run dev-install`: classic npm install for every package which installs peer dependencies as dev dependencies
- `npm run ci-install`: the same as the above command but (a) removes present node_modules and (b) needs a package-lock.json 
- `npm run compile`: runs tsc in every package in order to create the *dist* directory for node
- `npm run compile:browser`: runs tsc in every package in order to create the *dist.browser* directory for webpack
- `npm run clean`: cleans all packages, i.e. removes node_modules
- `npm run lint`: runs the linter for all packages
- `npm run test`: runs tests in each package
- `npm run publish`: publish packages which changed
- `npm run dev`: compile all packages and invoke the client.js file in the dev package
- `npm run typedoc:create`: create typedoc documentation
- `npm run docsify:serve`: serve the docsify documentation locally
- `npm run toc`: update the table of contents in this README file
- `npm run snyk:[monitor|protect|test]`: runs the respective snyk command - monitor and test in subpackages

### Different Compile Targets
We create two build directories: *dist* and *dist.browser*.
This library is optimized for backend usage with node.
Thus, we focus on the *dist* distribution of the library.

However, we want to provide basic support for the browser via the webpack bundler.
Thus, we compile with the *ES5* and *CommonJS* target for the *dist.browser* distribution.
Webpack automatically recognizes and references the browser distribution.

### New NPM Package Linking
Npm now uses so called 'file-specifiers'.   
That is why we should put all dev-dependencies and peer-dependencies for packages in the package.json file at the root.   
The packages in the packages folder then use the contents of the root node_modules folder along with their respective
node_modules folder. They get effectively merged.

Here is an issue which explains the recent changes and why `lerna bootstrap` is not used anymore: https://github.com/lerna/lerna/issues/1587.

It is a very fast JavaScript world we live in. ;)

### VSCode Issues
Sometimes it is necessary to close and reopen vscode again in order for all imports to be resolved correctly.
This issue was observed for local package imports that use symlinks.

## Submitting a PR
If you want to report a bug or propose an enhancement, [please fill an issue](https://gitlab.com/nesto-software/moment-holiday/issues).
If you want to add a locale package, please use the [skeleton provided in the repository](https://gitlab.com/nesto-software/moment-holiday/tree/master/examples/locale).
If you want to do something else, you can [place a pull request directly](https://gitlab.com/nesto-software/moment-holiday/merge_requests) or [contact the maintainer](mailto:martin.loeper@nesto-software.de).