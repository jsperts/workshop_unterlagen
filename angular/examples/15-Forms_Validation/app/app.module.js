import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

angular.module('app', [])
    .component(mainComponentName, MainComponent);
