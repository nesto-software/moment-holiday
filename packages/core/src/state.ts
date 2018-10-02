import { AbstractAdministrativeUnit } from "./abstract-administrative-unit";
import { AbstractLocale } from "./abstract-locale";
import { IHolidayDefinitionInternal } from "./holiday-definition.interface";
import { Region } from "./region";
import { AbstractTag } from "./tag/abstract-tag";
import { StateTag } from "./tag/state-tag";

export class State extends AbstractAdministrativeUnit {
    constructor(name: string,
        abbreviation: string,
        locale: AbstractLocale,
        private readonly containingRegions?: Region[]) {

        super(name, abbreviation, locale);
        this.passTagToContainingRegions();
    }

    private passTagToContainingRegions() {
        if (this.containingRegions) {
            this.containingRegions.forEach((region) => {
                region.addStateTag(new StateTag(this.getAbbreviation()));
            });
        }
    }

    public getRegions() {
        return this.containingRegions;
    }

    public tagHolidayDefinition(holidayDefinition: IHolidayDefinitionInternal) {
        if (!holidayDefinition.tags) {
            holidayDefinition.tags = [];
        }

        holidayDefinition.tags.push(new StateTag(this.getAbbreviation()));

        return holidayDefinition;
    }
}
