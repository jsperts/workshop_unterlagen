import {name as constantServiceName} from './constants';
import {name as valueServiceName} from './values';
import {name as serviceServiceName} from './service.service';
import {name as factoryServiceName} from './factory.factory';
import {name as providerServiceName} from './provider.provider';
import {name as decoratedFactoryName} from './decorated.factory';

class Main {
  constructor(constantService, valueService, serviceService, factoryService, providerService, decoratedFactory) {
    this.constantName = constantService.name;
    this.valueName = valueService.name;
    this.serviceName = serviceService.getName();
    this.factoryName = factoryService.getName();
    this.providerName = providerService.getName();
    this.decoratorName = decoratedFactory.getName();
  }
}
// $inject property annotation
Main.$inject = [constantServiceName, valueServiceName, serviceServiceName, factoryServiceName, providerServiceName, decoratedFactoryName];

const component = {
  template: `
    <h2>Inject</h2>
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
export const name = 'inject';
