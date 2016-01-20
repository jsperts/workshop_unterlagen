class Main {
  constructor() {
    this.text = 'Ich Bin Ein Text';
    this.array = [{name: 'Max'}, {name: 'John'}, {name: 'Mike'}, {name: 'Bert'}];
    this.myNumber = 1.22;
  }
}

const component = {
  templateUrl: './app/main.component.html',
  controller: Main
};

export default component;
export const name = 'myApp';
