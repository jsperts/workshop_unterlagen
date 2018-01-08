# Example code for Angular

These examples are part of our [Angular + TypeScript Workshop](https://jsperts.de/in-house-schulungen/angular-typescript)

## Prerequisites

First install the TypeScript compiler globally:

```
npm install -g typescript@2.4.2
```

Now install all dependencies with:

```
npm install
```

For Unit\_Tests, E2E\_Tests and Redux you will also have to run `npm install` in the respective directories

## Usage

To compile the examples in the Code directory run `tsc` in the directory of the example you want to compile.
To compile the Unit\_Tests just run `tsc` in that directory. To launch [karma](https://karma-runner.github.io/1.0/index.html) for the tests run `npm test`.
To compile the Redux example just run `tsc` in that directory.

To view the examples in the browser run `npm start` directly in the examples directory and navigate to `localhost:8081`.

### E2E Tests Usage

To compile the E2E\_Tests run `tsc` in that directory. You can start the webserver with `npm start` and navigate to `localhost:4200` to view the page.
To launch the tests, you will have to run `npm run webdriver` (will update the webdriver and start the selenium server) in one console window, `npm test` in another console. Before doing so make sure that the webserver is running by calling `npm start`
