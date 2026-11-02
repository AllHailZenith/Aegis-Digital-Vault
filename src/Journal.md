Phase 1
I created the accessVault function and tested it with different keys. Strict mode helps catch common coding mistakes and makes JavaScript behave more safely.

Phase 2
I added custom error classes to identify different vault problems. Returning a value allows the program to continue normally, while throwing an error signals that something went wrong. Custom errors make it easier to identify and handle specific problems.

Phase 3
Added try, catch, and finally to handle vault errors without stopping the entire program. The catch block handles specific errors, while finally runs whether the attempt succeeds or fails. It could be useful for closing files or releasing resources after an operation.

Phase 4
Made automated tests to check correct keys, missing keys, NaN, and incorrect passwords. Automated testing makes it easier to check the same behavior repeatedly. I learned that throwing an error immediately stops the normal flow and moves execution to the catch block, where the error can be handled.