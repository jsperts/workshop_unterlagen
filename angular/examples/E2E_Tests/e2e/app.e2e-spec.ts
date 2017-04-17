import { element, by } from 'protractor';

import { E2ePage } from './app.po';

describe('e2e App', function() {
  let page: E2ePage;

  beforeEach(() => {
    page = new E2ePage();
  });

  it('should be able to add a new color', () => {
    page.navigateToHome();
    // Find input field and write 'green' into it
    element(by.name('color')).sendKeys('green');
    // Find button and click it
    element(by.buttonText('Add Color')).click();
    // Find all elements in the list and count them (we have 4 elements when we start)
    expect(element.all(by.css('[paint]')).count()).toBe(5);
  });

  it('should be able to select a color', () => {
    page.navigateToHome();
    // Get the first element of the list
    const elem = element.all(by.css('[paint]')).first();
    // click it
    elem.click();
    expect(
      // Find our component containing the selected color
      element(by.tagName('app-select-color'))
      // Find the p tag and get its text
      .element(by.tagName('p')).getText()
      // check if the text matches (the first color in the list is always black)
    ).toBe('Selected color: black');
  });
});
