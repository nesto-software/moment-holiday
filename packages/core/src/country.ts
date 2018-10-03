import { AbstractAdministrativeUnit } from "./abstract-administrative-unit";
import { AbstractLocale } from "./abstract-locale";
import { HolidayDefinition } from "./holiday-definition";
import { IHolidayDefinitionInternal } from "./holiday-definition.interface";
import { State } from "./state";
import { AbstractTag } from "./tag/abstract-tag";
import { CountryTag } from "./tag/country-tag";
import { InTag } from "./tag/in-tag";

export class Country {
    private readonly administrativeUnitMapping: Map<string, AbstractAdministrativeUnit> =
        new Map<string, AbstractAdministrativeUnit>();

    constructor(private readonly name: string,
        private readonly abbreviation: string,
        administrativeUnits: AbstractAdministrativeUnit[],
        private readonly locale: AbstractLocale) {

        administrativeUnits.forEach((administrativeUnit) => {
            this.administrativeUnitMapping.set(administrativeUnit.getAbbreviation(), administrativeUnit);

            // add regions inside states into the mapping
            if (administrativeUnit instanceof State) {
                const regions = (administrativeUnit as State).getRegions();
                if (regions) {
                    regions.forEach((region) => {
                        this.administrativeUnitMapping.set(region.getAbbreviation(), region);
                    });
                }
            }
        });
    }

    public getName() {
        return this.name;
    }

    public getAbbreviation() {
        return this.abbreviation;
    }

    public getAdministrativeUnits(): AbstractAdministrativeUnit[] {
        return Array.from(this.administrativeUnitMapping.values());
    }

    public getAdministrativeUnit(unitAbbreviation: string): AbstractAdministrativeUnit {
        const state = this.administrativeUnitMapping.get(unitAbbreviation);
        if (state !== undefined) {
            return state;
        } else {
            throw new Error("AdministrativeUnit " + unitAbbreviation + " not found.");
        }
    }

    public getCountryHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return this.locale.getHolidayDefinitions()
            .map((definition) => this.tagHolidayDefinition(definition, CountryTag));
    }

    public tagHolidayDefinition(holidayDefinition: IHolidayDefinitionInternal,
        // tslint:disable-next-line:variable-name
        TagType: new (...args: any[]) => AbstractTag) {

        if (!holidayDefinition.tags) {
            holidayDefinition.tags = [];
        }

        if (TagType === InTag) {
            const inTag = holidayDefinition.tags.find((tag) =>
                tag.constructor.name === InTag.name) as InTag | undefined;

            if (inTag) {
                inTag.addValue(new CountryTag(this.getAbbreviation()));
            } else {
                holidayDefinition.tags.push(new InTag(new CountryTag(this.getAbbreviation())));
            }
        } else {
            holidayDefinition.tags.push(new TagType(this.getAbbreviation()));
        }

        return holidayDefinition;
    }
}
