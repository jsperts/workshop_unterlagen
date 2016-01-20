class Main {
  constructor() {
    this.user = {
      name: '',
      pass: ''
    };
  }

  login() {
    const form = this.loginForm;
    console.log(form);
    if (form.$valid) {
      console.log('update!');
    } else {
      console.log('fehler!');
    }
  }
}

const component = {
  templateUrl: './app/main.component.html',
  controller: Main
};

export default component;
export const name = 'myApp';
