import { browser } from 'protractor';

export class E2ePage {
  navigateToHome() {
    return browser.get('/');
  }
}
