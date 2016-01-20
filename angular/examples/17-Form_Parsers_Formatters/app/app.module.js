import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as capitalizeDirective, name as capitalizeDirectiveName} from './capitalize.directive';

angular.module('app', [])
    .component(mainComponentName, MainComponent)
    .directive(capitalizeDirectiveName, capitalizeDirective);
