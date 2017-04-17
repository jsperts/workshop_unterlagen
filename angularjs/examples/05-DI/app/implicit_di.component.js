class Main {
  // implicit annotation
  constructor(constantService, valueService, MyService, factoryService, Provider, decoratedFactory) {
    this.constantName = constantService.name;
    this.valueName = valueService.name;
    this.serviceName = MyService.getName();
    this.factoryName = factoryService.getName();
    this.providerName = Provider.getName();
    this.decoratorName = decoratedFactory.getName();
  }
}

const component = {
  template: `
    <h2>Implicit</h2>
    <h3>Constant Service</h3>
    <p>Name: {{$ctrl.constantName}}</p>

    <h3>Value Service</h3>
    <p>Name: {{$ctrl.valueName}}</p>

    <h3>Service Service</h3>
    <p>Name: {{$ctrl.serviceName}}</p>

    <h3>Factory Service</h3>
    <p>Name: {{$ctrl.factoryName}}</p>

    <h3>Provider Service</h3>
    <p>Name: {{$ctrl.providerName}}</p>

    <h3>Decorator</h3>
    <p>Name: {{$ctrl.decoratorName}}</p>
  `,
  controller: Main
};

export default component;
export const name = 'implicit';
