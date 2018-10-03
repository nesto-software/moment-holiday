/**
 * Implementation of a set which determines equality based
 * on the name property of an object which implements {@link IGeneralSetComparable}.
 *
 *
 * from: https://stackoverflow.com/questions/29759480/how-to-customize-object-equality-for-javascript-sets
 */
export class GeneralSet<T extends IGeneralSetComparable> {
    private readonly map = new Map<string, T>();

    public [Symbol.iterator]() {
        return this.values();
    }

    public add(...items: T[]) {
        for (const item of items) {
            this.map.set(item.name, item);
        }
    }

    public values() {
        return this.map.values();
    }
}

export interface IGeneralSetComparable {
    name: string;
}
