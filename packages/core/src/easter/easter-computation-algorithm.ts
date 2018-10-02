import { easter } from "date-easter";
import * as mem from "mem";
import LRUCache = require("quick-lru");
import { IEasterComputationAlgorithm } from "./easter-computation-algorithm.interface";

export class EasterComputationAlgorithm implements IEasterComputationAlgorithm {
    private static readonly lruCache = new LRUCache(
        {
            maxSize: 10000,
        },
    );

    private readonly _memEaster = mem(easter, {
        cache: EasterComputationAlgorithm.lruCache,
    });

    /**
     * Computes the easter date for the given year.
     * @param number the year to compute easter for
     * @returns the easter date for the given year
     */
    public compute(year: number) {
        return this._memEaster(year);
    }
}
