import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as InjectComponent, name as injectComponentName} from './inject_di.component';
import {default as ImplicitComponent, name as implicitComponentName} from './implicit_di.component';

import {default as constants, name as constantsName} from './constants';
import {default as values, name as valuesName} from './values';

import {default as ServiceService, name as serviceServiceName} from './service.service';
import {default as factoryFactory, name as factoryFactoryName} from './factory.factory';
import {default as ProviderProvider, name as providerProviderName} from './provider.provider'
import {default as decoratedFactory, name as decoratedFactoryName} from './decorated.factory';

import {default as appConfig} from './app.config';
import {default as decoratedFactoryDecorator} from './decorated.decorator';

angular.module('app', [])
    .constant(constantsName, constants)
    .value(valuesName, values)
    .service(serviceServiceName, ServiceService)
    .factory(factoryFactoryName, factoryFactory)

    // Provider + Config
    .provider(providerProviderName, ProviderProvider)
    .config(appConfig)

    // decorator
    .factory(decoratedFactoryName, decoratedFactory)
    .decorator(decoratedFactoryName, decoratedFactoryDecorator)

    .component(mainComponentName, MainComponent)
    .component(injectComponentName, InjectComponent)
    .component(implicitComponentName, ImplicitComponent);
