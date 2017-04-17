import angular from 'angular';
import ngRoute from 'angular-route';

import routeConfig from './app.routes';
import appConfig from './app.config';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as Comp1Component, name as comp1ComponentName} from './comp1.component';
import {default as Comp2Component, name as comp2ComponentName} from './comp2.component';

angular.module('app', [ngRoute])
    .config(routeConfig)
    .config(appConfig)
    .component(mainComponentName, MainComponent)
    .component(comp1ComponentName, Comp1Component)
    .component(comp2ComponentName, Comp2Component);
