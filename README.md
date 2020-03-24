<p align="center">
  <img alt="MOMENT-HOLIDAY" width="400px" src="https://raw.githubusercontent.com/nesto-software/moment-holiday/master/docs/assets/images/moment-holiday.png" />
</p>
<h2 align="center">Handling holidays with 💪 typings using TypeScript</h2>
<custom-script data-src="assets/js/runkit/usage.js"></custom-script>

[![npm](https://img.shields.io/badge/npm-v6.2.0-blue.svg)](https://www.npmjs.com/package/@nesto-software/moment-holiday)
[![typescript](https://img.shields.io/badge/types-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![docs](https://img.shields.io/badge/api%20docs%20with-TypeDoc-blue.svg )](https://github.com/nesto-software/moment-holiday/tree/typedoc/typedocs/interfaces/api._moment_.moment.md)
[![Build Status](https://travis-ci.org/nesto-software/moment-holiday.svg?branch=master)](https://travis-ci.org/nesto-software/moment-holiday)
[![Coverage Status](https://coveralls.io/repos/github/nesto-software/moment-holiday/badge.svg?branch=master)](https://coveralls.io/github/nesto-software/moment-holiday?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/npm/@nesto-software/moment-holiday/badge.svg)](https://snyk.io/test/npm/@nesto-software/moment-holiday)
[![gitter](https://badges.gitter.im/nesto-software/moment-holiday.svg)](https://gitter.im/nesto-software/moment-holiday)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A [Moment.js](https://github.com/moment/moment) plugin for handling holidays at scale.

## Another holiday library?

With [date-holidays](https://github.com/commenthol/date-holidays) and [kodie's moment-holiday](https://github.com/kodie/moment-holiday), there are two alternatives
to `@nesto-software/moment-holiday`. We want to improve the existing approaches by providing a high-performance solution for enterprise Node.js backends.

As we found out, there are a lot of challenges in providing a library which covers most business needs in the B2B sector.
We face customers who want to bring in their own holidays.
In order to do so, we provide database integration and a caching strategy to reduce the impact of database queries whenever possible.
[Click here](https://nesto-software.github.io/moment-holiday/#/concepts.md?id=caching) if you are curious how we do it.

For a list of currently supported countries, [click here](https://nesto-software.github.io/moment-holiday/#/README?id=supported-countries-states-regions). 
If your country is missing, we want to encourage you to add your locale bundle by [submitting a PR](https://nesto-software.github.io/moment-holiday/#/CONTRIBUTING?id=submitting-a-pr).

> Our main focus is on Node.js as we think that it is most effective if holidays are managed centrally and exposed through a REST API. However, there is [browser support](https://nesto-software.github.io/moment-holiday/#/browser) if you want
to use this library in the frontend.

## Features

- 🚀 Built for Node.js and Browser
- ⚡️️ Simple, Powerful, & Intuitive API
- 💪 Typings using TypeScript
- 🔥 Better Performance using Function Caching
- 🇩🇪 🇦🇹 Multiple countries, states and regions
- 📑 Database Support for Custom Holidays

## Getting Started

Check out the [Quick Start](https://nesto-software.github.io/moment-holiday/#/quick-start) documentation to get started.

## Supported Countries, States, Regions

Countries: 3   
├── [DE](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/country-locale.ts): Germany (Deutschland)   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BW](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/bw.state-locale.ts): Baden-Württemberg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── [BY](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/by.state-locale.ts): Bayern   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BY_AUG](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/aug.region-locale.ts): Augsburg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BY_CATHOLIC](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/by-catholic.region-locale.ts): Überwiegend katholische Gemeinden     
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BE](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/be.state-locale.ts): Berlin   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [BB](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/bb.state-locale.ts): Brandenburg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [HB](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/hb.state-locale.ts): Bremen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [HH](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/hh.state-locale.ts): Hamburg   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [HE](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/he.state-locale.ts): Hessen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [MV](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/mv.state-locale.ts): Mecklenburg-Vorpommern   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [NI](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/ni.state-locale.ts): Niedersachsen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [NW](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/nw.state-locale.ts): Nordrhein-Westfalen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [RP](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/rp.state-locale.ts): Rheinland-Pfalz   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SL](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sl.state-locale.ts): Saarland   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SN](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sn.state-locale.ts): Sachsen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SN_CATHOLIC](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sn-catholic.region-locale.ts): Überwiegend katholische Gemeinden   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [ST](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/st.state-locale.ts): Sachsen-Anhalt   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [SH](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/sh.state-locale.ts): Schleswig-Holstein   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [TH](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/th.state-locale.ts): Thüringen   
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [TH_CATHOLIC](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/germany/src/locale/th-catholic.region-locale.ts): Überwiegend katholische Gemeinden   
├── [SE](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/sweden/src/locale/country-locale.ts): Sweden (Sverige) `country locale only`    
└── [AT](https://github.com/nesto-software/moment-holiday/tree/master/packages/locales/austria/src/locale/country-locale.ts): Austria (Österreich) `country locale only`   

## Roadmap
1. Increase test coverage.
2. Provide better documentation and usage examples.
3. Encourage developers to help increasing the number of [supported countries](#supported-countries-states-regions).

## Usage

<div class="runkit" id="runkit-usage"></div>

<div id="runkit-fallback">

```ts
import moment from "moment";  // always import moment before moment-holiday (peer-dependency with side effects)
import createMomentHolidayConfiguration from "@nesto-software/moment-holiday";

// create a holiday configuration for Germany / Bavaria
const holidays = createMomentHolidayConfiguration("DE", "BY");
const holidays2018 = holidays.in(2018);

// display the holiday names and their corresponding date for 2018
console.log(holidays2018.map(holiday => holiday.name + " - " + holiday.moment.format("DD.MM.YYYY")));
```

</div>

For more examples, please visit the [docsify examples page](https://nesto-software.github.io/moment-holiday/#/examples/README).

## License
Copyright 2018 Nesto Software GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
