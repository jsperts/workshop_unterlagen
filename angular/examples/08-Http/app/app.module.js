import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as loggingFactory, name as loggingFactoryName} from './logging.factory';

import appConfig from './app.config';

angular.module('app', [])
    .config(appConfig)
    .service(loggingFactoryName, loggingFactory)
    .component(mainComponentName, MainComponent);
