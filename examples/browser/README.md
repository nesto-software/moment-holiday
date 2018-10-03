<p align="center">
  <img alt="MOMENT-HOLIDAY" width="400px" src="https://raw.githubusercontent.com/nesto-software/moment-holiday/master/docs/assets/images/moment-holiday.png" />
</p>

# Browser Support
This is a simple repository which demonstrates how to use moment-holiday in the frontend.

## Installation

<span>1. Check out the code from the [monorepo](https://github.com/nesto-software/moment-holiday)</span>

```bash
git clone https://github.com/nesto-software/moment-holiday.git
cd moment-holiday
```

<span>2. Run the following commands</span>

```bash
npm run dev-install       // from root
cd examples/browser
npm install
npm run webpack
xdg-open dist/index.html  // open the index file in default browser (linux only)
```

## Config for your project
You might have noticed that this project's package.json references the moment-holiday library via a file-specifier: `"@nesto-software/moment-holiday": "../../packages/api"`.
If you are referencing the library from your own project, change the version identifier from *../../packages/api* to a valid version, e.g. *1.0.0*.   
You can find valid versions on [NPM](https://www.npmjs.com/package/@nesto-software/moment-holiday?activeTab=versions).

## Development
We do not actively target browser as we optimize moment-holiday for backend usage.
There are some important features missing at the moment such as tree shaking for bundle size reduction.
If you know how to implement tree shaking in conjunction with moment.js, feel free to submit a PR. =)
