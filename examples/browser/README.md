<p align="center">
  <img alt="MOMENT-HOLIDAY" width="400px" src="https://nesto-software.gitlab.io/moment-holiday/docs/assets/images/moment-holiday.png" />
</p>

# Browser Support
This is a simple repository which demonstrates how to use moment-holdiay in the frontend.

## Installation

1. Check out the code from the [monorepo](https://gitlab.com/nesto-software/moment-holiday)

```bash
git clone https://gitlab.com/nesto-software/moment-holiday.git
cd moment-holiday
```

2. Run the following commands

```bash
npm run dev-install       // from root
cd examples/browser
npm install
npm run webpack
xdg-open dist/index.html  // open the index file in default browser (linux only)
```

## Development
We do not actively target browser as we optimize moment-holiday for backend usage.
There are some important features missing at the moment such as tree shaking for bundle size reduction.
If you know how to implement tree shaking in conjunction with moment.js, feel free to submit a PR. =)