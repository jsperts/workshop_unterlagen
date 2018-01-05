module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-for': [ 2, {
      required: {
        some: [ 'nesting', 'id' ],
      },
      allowChildren: false,
    }]
  },
  env: {
    browser: true,
  },
};
