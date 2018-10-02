module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "ts",
        "js",
        "json"
    ],
    rootDir: "./",
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    testRegex: "(test/unit/specs/.*(test|spec))\.(js?|ts?)$",
    collectCoverageFrom: [
        "src/**/*.ts",
        "!bin/**/*"
    ],
    testPathIgnorePatterns: [
        "node_modules",
        "dist"
    ],
    moduleNameMapper: {
        "@definitions/(.*)$": "<rootDir>/definitions/$1"
    },
    coverageDirectory: "<rootDir>/coverage",

};
