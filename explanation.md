# Step-by-Step Explanation: TDD Multiply Example

**Partners:** Bernard Mutambo, Mary Achero

This document explains, in simple steps, how we built a multiply function using Test-Driven Development (TDD) in Node.js.

## 1. Project Setup

- Created a new Node.js project with `npm init`.
- Installed Mocha (test runner), Chai (assertion library), and ESLint (code linter) as development dependencies.
- Created a `test` folder and added a `test.js` file for our tests.
- Created a `multiply.js` file for our function.
- Updated `package.json` to add a test script: `"test": "mocha"`.

## 2. First TDD Cycle

- Wrote the first test: check if `multiply(1, 1)` returns `1`.
- Ran the test (it failed, because the function didn't exist yet).
- Created a simple `multiply` function that always returns `1`.
- Ran the test again (it passed).

## 3. Second TDD Cycle

- Added a new test: check if `multiply(2, 2)` returns `4`.
- Ran the tests (the new test failed).
- Updated the function to return `4` if both arguments are `2`, otherwise return `1`.
- Ran the tests again (both passed).

## 4. Third TDD Cycle

- Added a test: check if `multiply(3, 3)` returns `9`.
- Ran the tests (the new test failed).
- Updated the function to return `9` if both arguments are `3`, otherwise previous logic.
- Ran the tests again (all passed).

## 5. Fourth TDD Cycle

- Added a test: check if `multiply(4, 4)` returns `16`.
- Ran the tests (the new test failed).
- Updated the function to return `16` if both arguments are `4`, otherwise previous logic.
- Ran the tests again (all passed).

## 6. Generalize the Function

- Realized the function only worked for specific cases.
- Changed the function to return `a * b` for any numbers.
- Ran all tests (all passed).

## 7. Linting

- Used ESLint to check code style and fix any issues.

## 8. Done!

- Now we have a multiply function tested with TDD.

---

**Summary:**
We wrote tests first, then wrote just enough code to pass each test, and improved the function step by step. This is the basic idea of Test-Driven Development (TDD).
