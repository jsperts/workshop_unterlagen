import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as myLimitFilter, name as myLimitFilterName} from './my_limit.filter';

angular.module('app', [])
    .component(mainComponentName, MainComponent)
    .filter(myLimitFilterName, myLimitFilter);
