import angular from 'angular';

import {default as MainComponent, name} from './main.component';

angular.module('app', [])
  .component(name, MainComponent);
