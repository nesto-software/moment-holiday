import { UrlWithStringQuery } from "url";

/**
 * The law which defines/mentions the holiday.
 */
export class Legislation {
    constructor(private readonly _name: string,
        private readonly _url?: UrlWithStringQuery,
        private readonly _reference?: string) { }

    /**
     * Returns the name of the law.
     */
    get name() {
        return this._name;
    }

    /**
     * Returns the url where you can find the document on the web.
     */
    get url() {
        return this._url;
    }

    /**
     * Returns the paragraph which defines the holiday.
     */
    get reference() {
        return this._reference;
    }
}
