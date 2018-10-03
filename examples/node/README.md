<p align="center">
  <img alt="MOMENT-HOLIDAY" width="400px" src="https://raw.githubusercontent.com/nesto-software/moment-holiday/master/docs/assets/images/moment-holiday.png" />
</p>

# Simple Nodejs Example
This is a simple repository which demonstrates how to setup moment-holiday for the backend.

## Installation

<span>1. Check out the code from the [monorepo](https://github.com/nesto-software/moment-holiday)</span>

```bash
git clone https://github.com/nesto-software/moment-holiday.git
cd moment-holiday
```

<span>2. Run the following commands</span>

```bash
npm run dev-install // from root directory
cd examples/node
npm install
npm run example
```

## Config for your project
You might have noticed that this project's package.json references the moment-holiday library via a file-specifier: `"@nesto-software/moment-holiday": "../../packages/api"`.
If you are referencing the library from your own project, change the version identifier from *../../packages/api* to a valid version, e.g. *1.0.0*.   
You can find valid versions on [NPM](https://www.npmjs.com/package/@nesto-software/moment-holiday?activeTab=versions).