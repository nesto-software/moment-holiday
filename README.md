<p align="center">
  <img alt="MOMENT-HOLIDAY" width="400px" src="https://nesto-software.gitlab.io/moment-holiday/docs/assets/images/moment-holiday.png" />
</p>
<h2 align="center">Handling holidays with 💪 typings using TypeScript</h2>
<custom-script data-src="assets/js/runkit/usage.js"></custom-script>

[![npm](https://img.shields.io/badge/npm-v6.2.0-blue.svg)](https://www.npmjs.com/)
[![typescript](https://img.shields.io/badge/types-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![docs](https://img.shields.io/badge/api%20docs%20with-TypeDoc-blue.svg )](https://gitlab.com/nesto-software/moment-holiday/blob/gh-pages/interfaces/api._moment_.moment.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![pipeline status](https://gitlab.com/nesto-software/moment-holiday/badges/master/pipeline.svg)](https://gitlab.com/nesto-software/moment-holiday/pipelines)
[![coverage report](https://gitlab.com/nesto-software/moment-holiday/badges/master/coverage.svg)](https://gitlab.com/nesto-software/moment-holiday/commits/master)
[![Known Vulnerabilities](https://snyk.io/test/npm/@nesto-software/moment-holiday/badge.svg)](https://snyk.io/test/npm/@nesto-software/moment-holiday)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A [Moment.js](https://github.com/moment/moment) plugin for handling holidays at scale.

## Another holiday library?

With [date-holidays](https://github.com/commenthol/date-holidays) and [kodie's moment-holiday](https://github.com/kodie/moment-holiday), there are two alternatives
to `@nesto-software/moment-holiday`. We want to improve the existing approaches by providing a high-performance solution for enterprise Node.js backends.

As we found out, there are a lot of challenges in providing a library which covers most business needs in the B2B sector.
We face customers who want to bring in their own holidays.
In order to do so, we provide database integration and a caching strategy to reduce the impact of database queries whenever possible.
[Click here](https://nesto-software.gitlab.io/moment-holiday/docs/#/concepts.md?id=caching) if you are curious how we do it.

For a list of currently supported countries, [click here](https://nesto-software.gitlab.io/moment-holiday/docs/#/README?id=supported-countries-states-regions). 
If your country is missing, we want to encourage you to add your locale bundle by [submitting a PR](https://nesto-software.gitlab.io/moment-holiday/docs/#/CONTRIBUTING?id=submitting-a-pr).

> Our main focus is on Node.js as we think that it is most effective if holidays are managed centrally and exposed through a REST API. However, there is [browser support](https://nesto-software.gitlab.io/moment-holiday/docs/#/browser) if you want
to use this library in the frontend.

## Features

- 🚀 Built for Node.js and Browser
- ⚡️️ Simple, Powerful, & Intuitive API
- 💪 Typings using TypeScript
- 🔥 Better Performance using Function Caching
- 🇩🇪 🇦🇹 Multiple countries, states and regions
- 📑 Database Support for Custom Holidays

## Getting Started

Check out the [Quick Start](https://nesto-software.gitlab.io/moment-holiday/docs/#/quick-start) documentation to get started.

## Supported Countries, States, Regions

Countries: 2   
├── [DE](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/country-locale.ts): Germany (Deutschland)   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BW](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/bw.state-locale.ts): Baden-Württemberg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── [BY](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/by.state-locale.ts): Bayern   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [AUG](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/aug.region-locale.ts): Augsburg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BY_CATHOLIC](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/by-catholic.region-locale.ts): Überwiegend katholische Gemeinden     
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BE](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/be.state-locale.ts): Berlin   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BB](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/bb.state-locale.ts): Brandenburg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [HB](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/hb.state-locale.ts): Bremen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [HH](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/hh.state-locale.ts): Hamburg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [HE](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/he.state-locale.ts): Hessen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [MV](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/mv.state-locale.ts): Mecklenburg-Vorpommern   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [NI](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/ni.state-locale.ts): Niedersachsen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [NW](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/nw.state-locale.ts): Nordrhein-Westfalen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [RP](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/rp.state-locale.ts): Rheinland-Pfalz   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SL](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sl.state-locale.ts): Saarland   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SN](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sn.state-locale.ts): Sachsen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SN_CATHOLIC](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sn-catholic.region-locale.ts): Überwiegend katholische Gemeinden   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [ST](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/st.state-locale.ts): Sachsen-Anhalt   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SH](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sh.state-locale.ts): Schleswig-Holstein   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [TH](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/th.state-locale.ts): Thüringen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [TH_CATHOLIC](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/th-catholic.region-locale.ts): Überwiegend katholische Gemeinden   
└── [AT](https://gitlab.com/nesto-software/moment-holiday/tree/master/packages/locales/austria/src/locale/country-locale.ts): Austria (Österreich)   

## Usage

<div class="runkit" id="runkit-usage"></div>

<div id="runkit-fallback">

```ts
import moment from "moment";  // always import moment before moment-holiday (peer-dependency with side effects)
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";

const holidays = createMomentHolidayConfiguration("DE", "BW");
const holidays2018 = holidays.in(2018);
console.log(holidays2018.map(holiday => holiday.name + " - " + holiday.moment.format("DD.MM.YYYY")));
```

</div>

## License
Copyright 2018 Nesto Software GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
