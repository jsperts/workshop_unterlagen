# Example code for Angular 2

These examples are part of our [Angular 2 + TypeScript Workshop](https://jsperts.de/workshops/schulungen-seminare/angular2-typescript-workshop-02-2017)

## Prerequisites

First install the TypeScript compiler globally:

```
npm install -g typescript
```

Now install all dependencies with:

```
npm install
```

For Big\_Picture\_AOT and Unit\_Tests you will also have to run `npm install` in the respective directories

## Usage

To compile the examples in the Code directory run `tsc` in the directory of the example you want to compile.
To compile Big\_Picture\_AOT, you will have to run `npm run build` in that directory.
To compile the Unit\_Tests just run `tsc` in that directory. To launch [karma](https://karma-runner.github.io/1.0/index.html) for the tests run `npm test`.

To view the examples in the browser run `npm start` directly in the examples directory and navigate to `localhost:8081`.
