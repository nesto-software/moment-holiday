import { IHolidayDefinitionInternal } from "./holiday-definition.interface";

export abstract class AbstractLocale {

    public abstract getHolidayDefinitions(): IHolidayDefinitionInternal[];
}
