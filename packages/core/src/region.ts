import { AbstractAdministrativeUnit } from "./abstract-administrative-unit";
import { IHolidayDefinitionInternal } from "./holiday-definition.interface";
import { AbstractTag } from "./tag/abstract-tag";
import { InTag } from "./tag/in-tag";
import { RegionTag } from "./tag/region-tag";
import { StateTag } from "./tag/state-tag";

export class Region extends AbstractAdministrativeUnit {

    private stateTag: StateTag | null = null;

    public addStateTag(stateTag: StateTag): void {
        this.stateTag = stateTag;
    }

    public tagHolidayDefinition(holidayDefinition: IHolidayDefinitionInternal) {
        if (!holidayDefinition.tags) {
            holidayDefinition.tags = [];
        }

        holidayDefinition.tags.push(new RegionTag(this.getAbbreviation()));

        if (this.stateTag !== null) {
            const inTag = holidayDefinition.tags.find((tag) =>
                tag.constructor.name === InTag.name) as InTag | undefined;

            if (inTag) {
                inTag.addValue(this.stateTag);
            } else {
                holidayDefinition.tags.push(new InTag(this.stateTag));
            }
        }

        return holidayDefinition;
    }
}
