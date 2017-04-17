'use strict';

const MainPage = require('./page_objects/main_page');
const page = new MainPage();

describe('Search', () => {
  it('should only show the matching author after we use the search', () => {
    page.load();
    expect(page.getAuthorsList().count()).toBe(4);
    element(by.model('$ctrl.searchTerm')).sendKeys('a');
    element(by.buttonText('Search')).click();
    expect(page.getAuthorsList().count()).toBe(1);
  });

  it('should show again all authors if the search term is empty', () => {
    expect(page.getAuthorsList().count()).toBe(1);
    element(by.model('$ctrl.searchTerm')).clear();
    element(by.buttonText('Search')).click();
    expect(page.getAuthorsList().count()).toBe(4);
  });
});
