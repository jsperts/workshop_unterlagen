# Example code for React

These examples are part of our [React Workshop](https://jsperts.de/schulungen/react)

## Prerequisites

First install webpack globally:

```
npm install -g webpack
```

Now install all dependencies with:

```
npm install
```

For Unit\_Tests you will also have to run `npm install` in the respective directory

## Usage

To compile the examples in the Code directory run `webpack --config path/to/webpack.config.js` in the directory of the example you want to compile.
Example: `webpack --config ../../webpack.config.js` if you are in `Code/Component_Tree`.

To view the examples in the browser run `npm start` directly in the examples directory and navigate to `localhost:8081`.

### Unit\_Tests

To run the tests use:

```bash
npm test
```

To view the app:

```bash
npm start
```

The unit test example uses [create-react-app](https://github.com/facebookincubator/create-react-app)

