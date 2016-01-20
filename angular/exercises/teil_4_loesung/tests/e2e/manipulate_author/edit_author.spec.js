'use strict';

const MainPage = require('../page_objects/main_page');
const page = new MainPage();

describe('Edit author', () => {
  let authorName = '';
  it('should navigate to the edit route with the given author id', () => {
    page.load();
    element(by.tagName('my-author')).evaluate('author').then((author) => {
      const id = author._id;
      authorName = author.name;
      element(by.tagName('my-author')).element(by.className('glyphicon-edit')).click();
      expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}/#/edit/${id}`);
    });
  });

  it('should update the author and return to the main page', () => {
    element(by.model('$ctrl.authorToEdit.name')).sendKeys('UPDATED');
    element(by.buttonText('Submit')).click();
    expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}/#/`);
    expect(element(by.binding('name')).getText()).toEqual(`${authorName}UPDATED`);
  });
});
