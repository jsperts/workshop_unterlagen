'use strict';

const MainPage = require('../page_objects/main_page');
const page = new MainPage();

describe('Add author', () => {
  it('should navigate to the add route', () => {
    page.load();
    element(by.className('glyphicon-plus')).click();
    expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}/#/add`);
  });

  it('should add an author and return to the main page', () => {
    element(by.model('$ctrl.authorToEdit.name')).sendKeys('ADDED');
    element(by.buttonText('Submit')).click();
    expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}/#/`);
    expect(page.getAuthorsList().count()).toEqual(4);
  });
});
