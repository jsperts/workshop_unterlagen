module.exports = {
  'extends': 'standard',
  'rules': {
    'semi': [2, 'always'],
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'ignore',
    }],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'always'],
    'no-else-return': 2,
    'max-len': [2, 120],
  }
};
