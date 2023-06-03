# Building Accessible Front-end Applications

Best Practices and Automated Accessibility Testing

- [Building Accessible Front-end Applications](#building-accessible-front-end-applications)
  - [Pre-Requisites](#pre-requisites)
  - [Available Scripts](#available-scripts)
    - [Development](#development)
    - [Build](#build)
    - [Production](#production)
    - [Testing](#testing)


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
