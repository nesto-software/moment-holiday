# Basic Examples
<custom-script data-src="assets/js/runkit/basic-examples.js"></custom-script>

## Check if a specific day is a holiday

::: tabs topic1

- Basic

    <span style="font-size: 1.0em;"><em>
    \> Returns true if the given moment is a holiday.<br />
    \> Considers **every** holiday.
    </em></span>
    <div class="runkit no_overflow" id="runkit-basic-0"></div>

- Predicate

    <span style="font-size: 1.0em;"><em>
    \> Returns true if the given moment is a holiday and **matches the predicate**.<br />
    \> Considers holidays which match the given **predicate only**.
    </em></span>
    <div>
        <b>Usecase</b>

        <div>
            You might want to consider special types of holidays.
            You do this by searching particular tags.
        </div>
        <br />
    </div>
    <div class="runkit no_overflow" id="runkit-basic-1"></div>

:::

## Compute holidays for a date-range

::: tabs topic2

- Year

    <span style="font-size: 1.0em;"><em>Returns all holidays for a specific year.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-2"></div>

- Month

     <span style="font-size: 1.0em;"><em>Returns all holidays for a specific month in a specific year.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-3"></div>

- Between

    <span style="font-size: 1.0em;"><em>Returns all holidays in a date range between two moment objects.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-4"></div>

- Date-Range

    <span style="font-size: 1.0em;"><em>Uses a [moment-range](https://github.com/rotaready/moment-range) object to compute holidays.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-5"></div>

:::

## Sort holidays

By default, there is no guarantee for holidays to be returned sorted.
You must enforce the order by calling one of the following *.sort()* methods on the `HolidayArray`.

::: tabs topic3

- Ascending

    <span style="font-size: 1.0em;"><em>Sorts the holidays ascending, i.e. beginning with those in January.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-6"></div>

- Descending

    <span style="font-size: 1.0em;"><em>Sorts the holidays descending, i.e. beginning with those in December.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-7"></div>

:::

## Filter holidays

You may want to filter out holidays which do not match a specific tag.
The `HolidayArray` class provides a filter method for this purpose.

::: tabs topic4

- Basic

    <span style="font-size: 1.0em;"><em>Filters out holidays which do not match the given predicate.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-8"></div>

:::

## Obtain holiday definitions

Returns the holiday definitions which are used by the moment-holiday configuration.

**Usecase**   
You may want to show the client which holidays are considered by the active moment-holiday configuration.
It is useful to make the client aware of which holiday definitions are used.
By making the client aware, you can delegate the responsibility for a correct set of holiday definitions to the customer.

::: tabs topic5

- Basic

    <span style="font-size: 1.0em;"><em>Returns the active holiday definitions.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-9"></div>

:::

## Obtain adjacent holidays

Sometimes you might want to obtain the upcoming or preceding holiday for a specific date.
You can specify a predicate in order to find the upcoming/preceding holiday with a particular attribute.

?> Be aware that you could search forever, if you specify a predicate which does never return true. To prevent an infinite loop, there is an (optional) parameter `maxSearchYears` which defaults to 2000. It limits the max number of years which are queried.

::: tabs topic6

- Upcoming Holiday

    <span style="font-size: 1.0em;"><em>Returns the upcoming holiday.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-10"></div>

- Preceding Holiday

    <span style="font-size: 1.0em;"><em>Returns the preceding holiday.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-11"></div>

- Predicate

    <span style="font-size: 1.0em;"><em>Returns the upcoming/preceding holiday which **matches a given predicate**.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-12"></div>

- By Name

    <span style="font-size: 1.0em;"><em>Returns the upcoming/preceding holiday with the given name.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-13"></div>

:::

## Obtain country and state identifiers

You can obtain a list of all available identifiers which are accepted by the moment-holiday factory method.
This is particularly useful if you want to give a client the possibility to select its own locales.

::: tabs topic7

- Country

    <span style="font-size: 1.0em;"><em>Returns all country identifiers. Countries possess a short form (the 'abbreviation') which is a [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and a long form which is the english name of the country. The value returned by this method is a `Map` which contains an assignment of country abbreviation to its respective country name.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-14"></div>

- Administrative Unit

    <span style="font-size: 1.0em;"><em>Returns all identifiers of administrative units (including states and regions) for a particular country.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-15"></div>

- State

    <span style="font-size: 1.0em;"><em>Returns all state identifiers for a particular country.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-16"></div>

- Region

    <span style="font-size: 1.0em;"><em>Returns all region identifiers for a particular country.</em></span>
    <div class="runkit no_overflow" id="runkit-basic-17"></div>

:::