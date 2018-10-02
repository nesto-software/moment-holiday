// introduce a custom matcher to check if an array contains an object, which has a property with a specific value
export const addExpectToContainObject = () => {
    expect.extend({
        toContainObject(received, argument) {

            const pass = (this as any).equals(received,
                expect.arrayContaining([
                    expect.objectContaining(argument)
                ])
            )

            if (pass) {
                return {
                    message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
                    pass: true
                }
            } else {
                return {
                    message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
                    pass: false
                }
            }
        },
    });
};

// add typings for the custom matcher
declare global {
    namespace jest {
        // tslint:disable-next-line:interface-name
        /**
         * Matcher to checks if an array contains an object, which has a property with a specific value.
         * Example: 
         *  arguments = { name: "John Doe" }
         */
        interface Matchers<R> {
            toContainObject(arguments: any): R
        }
    }
}