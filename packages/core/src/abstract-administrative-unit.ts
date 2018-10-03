import { AbstractLocale } from "./abstract-locale";
import { IHolidayDefinitionInternal } from "./holiday-definition.interface";

export abstract class AbstractAdministrativeUnit {
    constructor(private readonly name: string,
        private readonly abbreviation: string,
        private readonly locale: AbstractLocale) {
    }

    public getName() {
        return this.name;
    }

    public getAbbreviation() {
        return this.abbreviation;
    }

    public getHolidayDefinitions(): IHolidayDefinitionInternal[] {
        return this.locale.getHolidayDefinitions().map((definition) => this.tagHolidayDefinition(definition));
    }

    public abstract tagHolidayDefinition(holidayDefinition: IHolidayDefinitionInternal): IHolidayDefinitionInternal;
}
