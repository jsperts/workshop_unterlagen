class Main {
  constructor() {
    this.user = {
      firstName: '',
      lastName: '',
      title: '',
      lang: {},
      living: '',
      happy: '',
      age: 0
    };

    this.titles = ['Herr', 'Frau'];
    this.languages = [{
      id: 'langEN',
      short: 'en',
      long: 'Englisch'
    }, {
      id: 'langDE',
      short: 'de',
      long: 'Deutsch'
    }];

    this.cities = [{id: 'DA', name: 'Darmstadt'}, {id: 'FR', name: 'Frankfurt'}, {id: 'BE', name: 'Berlin'}, {id: 'BR', name: 'Bremen'}];
  }

  sendToServer() {
    console.log(this.user);
  };
}

const component = {
  templateUrl: './app/main.component.html',
  controller: Main
};

export default component;
export const name = 'myApp';
