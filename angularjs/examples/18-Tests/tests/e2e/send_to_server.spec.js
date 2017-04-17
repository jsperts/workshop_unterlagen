'use strict';

describe('Send to server', () => {
  let mockApp;
  beforeEach(() => {
    mockApp = require('./helpers/mock');
  });

  afterEach(() => {
    browser.clearMockModules();
  });

  it('should send the data entered in the input-field to the server', () => {
    browser.addMockModule('appMock', mockApp);
    browser.get('/');
    element(by.model('$ctrl.currentColor')).sendKeys('black');
    element(by.buttonText('Send color')).click();
    expect(element(by.binding('$ctrl.response')).getText()).toBe('DATA_RECEIVED');
  });
});
