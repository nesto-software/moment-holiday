import momentHoliday from '@nesto-software/moment-holiday';
import moment from "moment";
import { TypeTag } from '@nesto-software/moment-holiday-core';
import { AbstractMomentHoliday } from '@nesto-software/moment-holiday';

const displayHolidays = function(countrySelectBox, administrativeUnitBox) {
    const countryId = countrySelectBox.value;
    const administrativeUnitId = administrativeUnitBox.value;

    const holidays = momentHoliday(countryId, administrativeUnitId);
    const upcomingHolidays = holidays.between(moment(), moment().add(1, "year"));

    const container = document.getElementById("holidays");

    // clear the container
    container.innerHTML = '';

    for (const holiday of upcomingHolidays) {
        const type = holiday.getTag(TypeTag);
        const typeName = (type.value) ? "observance" : "public";
        const text = "[" + holiday.moment.format("DD.MM.YYYY") + "]\t" + holiday.name + " (" + typeName + ")";

        const para = document.createElement("li");
        const node = document.createTextNode(text);
        para.appendChild(node);
        container.appendChild(para);
    }
}

window.onload = function() {
    const countrySelectBox = document.getElementById("country");
    const administrativeUnitBox = document.getElementById('administrativeUnit');

    // obtain all countries
    const countryIds = AbstractMomentHoliday.getCountryIdentifiers();

    // add as option to the country select box
    for (const countryId of countryIds) {
        var option = document.createElement("option");
        console.log(countryId);
        option.text = countryId[1];

        countrySelectBox.add(option);
    }

    const updateAdministrativeUnits = function(evt) {
        // clear current contents
        administrativeUnitBox.innerHTML = '';
        const identifiers = AbstractMomentHoliday.getAdministrativeUnitIdentifiers(countrySelectBox.value);

        // add the special ALL identifier
        identifiers.push("ALL");

        for (const administrativeUnit of identifiers) {
            var option = document.createElement("option");
            option.text = administrativeUnit;
            administrativeUnitBox.add(option);
        }

        // the onchange is typically not called in this case, so we call it manually
        administrativeUnitBox.selectedIndex = 0;
        displayHolidays(countrySelectBox, administrativeUnitBox);
    };

    // update right select box when country changes
    countrySelectBox.onchange = updateAdministrativeUnits;

    // update the country holidays if right select box changes
    administrativeUnitBox.onchange = displayHolidays.bind(undefined, countrySelectBox, administrativeUnitBox);

    countrySelectBox.selectedIndex = 0;
    updateAdministrativeUnits();
    displayHolidays(countrySelectBox, administrativeUnitBox);
};
