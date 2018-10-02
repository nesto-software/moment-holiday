export { tagsDiscriminatorKey } from "./schemas/abstract-tag.schema";
export { tagsPath } from "./schemas/holiday-definition.schema";
export {
    IAbstractTag,
    IAbstractTagDocument,
} from "./schemas/interfaces/abstract-tag.interface";
export {
    IAbstractDate,
    IAbstractDateDocument,
} from "./schemas/interfaces/abstract-date.interface";
export {
    IEasterDependentDate,
    IEasterDependentDateDocument,
} from "./schemas/interfaces/easter-dependent-date.interface";
export {
    IRecurringDate,
    IRecurringDateDocument,
} from "./schemas/interfaces/recurring-date.interface";
export {
    IHolidayDefinition,
    IHolidayDefinitionDocument,
} from "./schemas/interfaces/holiday-definition.interface";
export { EasterDependentDateModel } from "./models/easter-dependent-date.model";
export { RecurringDateModel } from "./models/recurring-date-model";

export { MongooseDatabase as default } from "./mongoose-database";
