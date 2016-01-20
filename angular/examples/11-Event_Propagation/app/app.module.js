import angular from 'angular';

import {default as RootScopeComponent, name as rootScopeComponentName} from './root_scope.component';
import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as SubComponent, name as subComponentName} from './sub.component';

angular.module('app', [])
    .component(rootScopeComponentName, RootScopeComponent)
    .component(mainComponentName, MainComponent)
    .component(subComponentName, SubComponent);
