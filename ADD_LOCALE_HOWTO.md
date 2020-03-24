# How to add a new locale package from a remote branch?
The follwoing procedure 

- Add the remote branch via: `git remote add <username> <url>`
- Merge the respective branch: `git pull <username> <user-remote-branch>`
- Check if exports are defined as expected in the locale package index.ts file
- Add the new locale package to api package's package.json file: dependencies and optionalBrowserDependencies
- Make the new package available to the api package: `npm run dev-install` and `npm run compile`
- Export the new holiday names from the api package, by exporting `HolidayName<Country>` from index.ts
- Open the abstract-moment-holiday.ts in the api package and do the following: import the new holiday names at the top of the file, modify the values under "merge identifiers for all countries", overload the MomentHolidayFactoryMethod method for the new country
- Register the new holiday-definition-factory into api package's *holiday-definition-factory-registry.ts*.
- In order to test if everything was added correctly: `npm run compile`
- optionally: add usage example to *examples/node/src/index.ts*
- Finally publish via: `npm run publish`