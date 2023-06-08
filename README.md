# Building Accessible Front-end Applications

Best Practices and Automated Accessibility Testing

- [Building Accessible Front-end Applications](#building-accessible-front-end-applications)
  - [Pre-Requisites](#pre-requisites)
  - [Available Scripts](#available-scripts)
    - [Development](#development)
    - [Build](#build)
    - [Production](#production)
    - [Testing](#testing)
  - [How to Implement Accessibility Test Automation](#how-to-implement-accessibility-test-automation)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Implementation](#implementation)
    - [Running tests](#running-tests)

## Pre-Requisites

Please ensure that **Node.js** 18.16 LTS as runtime environment and **yarn** as package manager are installed in your machine.

Run `yarn install` to install all the project dependencies.

## Available Scripts

In the root directory, you can run the following scripts:

### Development

Starts the application in development mode with hot-code reloading, API mock, error reporting, and more.

Run:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Build

Creates an optimized production build of your application in the `build` folder.

```bash
yarn build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Production

Starts the application in production mode. The application should be compiled with `yarn build` first.

```bash
yarn start:prod
```

The application will start at [http://localhost:3000](http://localhost:3000) by default.

### Testing

Launches the test runner in the interactive watch mode.

```bash
yarn test
```

To launch the test runner and gets test coverage run:

```bash
yarn test:coverage
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How to Implement Accessibility Test Automation

Determining whether a web application is accessible needs a well-rounded, **holistic testing approach**.

Automated testing is an integral part of our approach to accessibility testing and a great way to start weaving accessibility into a project, but it only captures about 40-50% of accessibility issues and many scenarios can’t be automated at all, requiring manual testing by using keyboard and screen readers, including mobile devices.

Automated accessibility tests definitely can’t catch everything, but it’s a valuable way to address **easy wins and prevent basic fails**.

**Jest-axe** is a custom Jest matcher for axe-core testing library. Because we are using TypeScript we need also to install the community maintained types package.

### Installation

Install Jest-axe library and the required types by running:

```bash
npm install --save-dev jest-axe @types/jest-axe
```

### Configuration

Once you have installed Jest-axe in your project, we need to provide the global configuration to be used:

Create a new utils file: _src\utils\tests.js_ with the following content.

In this case we configure it to validate onlyWCAG 2 A and 2.1 A rules:

```typescript
import { configureAxe, toHaveNoViolations } from "jest-axe";

[...]

// Extend Jest expect with Axe tool
expect.extend(toHaveNoViolations);

// Jest-axe Utils
// Runner options for axe-core
// https://www.deque.com/axe/core-documentation/api-documentation/#options-parameter
const runAxe = configureAxe({
  runOnly: ["wcag2a", "wcag21a"]
});

export { renderWithProviders, runAxe };
```

> Note: Check the [axe-core options](https://www.deque.com/axe/core-documentation/api-documentation/#options-parameter)

### Implementation

Import the axe runner in you test file: e.g.: _Home.test.tsx_:

```typescript
// Test Utils
import { renderWithProviders, runAxe } from "utils/tests";
```

Add a new test to your file:

```typescript
it("Renders with no accessibility violations", async () => {
  const { container } = renderWithProviders(<Home />);
  // Check a11y violations
  const results = await runAxe(container);
  expect(results).toHaveNoViolations();
});
```

### Running tests

Run your tests with `yarn test`

The test will fail if the renderComponent method is updated by passing an undefined alternative text:

> Expected the HTML found at $('img') to have no violations:
>
> Received:
>
> "Images must have alternate text (image-alt)"
>
> Fix any of the following:
> Element does not have an alt attribute
> aria-label attribute does not exist or is empty
> aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
> Element has no title attribute
> Element's default semantics were not overridden with role="none" or role="presentation"
>
> You can find more information on this issue here:
> https://dequeuniversity.com/rules/axe/4.5/image-alt?application=axeAPI

Fix the accessibility issues for the images and run again to check that tests are passed successfully and verify that the errors have been fixed.
