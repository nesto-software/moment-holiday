const testPathRE = /(^\/packages\/[^\/]+\/|\.spec|\/__tests?__)/g;
const testPathToFilePath = filepath => filepath.replace(testPathRE, '');
module.exports = {
    projects: [
        'packages/api',
        'packages/core',
        // 'packages/locales/*',    // we do not test configuration packages
        // 'packages/database-mongoose',    // mongoose database is currently in beta
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/**/*.d.ts",
        "!bin/**/*",
        "!dist/**/*",
        "!dist.browser/**/*",
        "!test/**/*"
    ],
};