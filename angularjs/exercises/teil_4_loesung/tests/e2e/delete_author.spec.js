'use strict';

const MainPage = require('./page_objects/main_page');
const page = new MainPage();

describe('Delete author', () => {
  it('should delete an author', () => {
    page.load();
    expect(page.getAuthorsList().count()).toBe(4);
    element(by.className('glyphicon-remove')).click();
    expect(page.getAuthorsList().count()).toBe(3);
  });
});
