const component = {
  template: `
    <a href="#/comp1">Component 1</a> <a href="#/comp2/3">Component 2</a>
    <ng-view></ng-view>
  `
};

export default component;
export const name = 'myApp';
