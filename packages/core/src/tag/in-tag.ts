import { CountryTag } from "./country-tag";
import { MultivalueTag } from "./multivalue-tag";
import { StateTag } from "./state-tag";

export class InTag extends MultivalueTag<StateTag | CountryTag> {
    constructor(private readonly _tagOrTags: StateTag | CountryTag | Array<StateTag | CountryTag>) {
        super(_tagOrTags);
    }
}
