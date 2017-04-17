exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['tests/e2e/**/*.spec.js'],
  baseUrl: 'http://localhost:8080'
};
