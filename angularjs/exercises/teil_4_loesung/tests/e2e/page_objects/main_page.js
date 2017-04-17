'use strict';

class MainPage {
  load() {
    browser.get('/');
  }
  getAuthorsList() {
    return element.all(by.repeater('author in $ctrl.authors'));
  }
}

module.exports = MainPage;
