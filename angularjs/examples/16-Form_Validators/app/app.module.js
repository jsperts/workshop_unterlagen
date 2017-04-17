import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as containsAbcDirective, name as containsAbcDirectiveName} from './contains_abc.directive'
import {default as containsAbcAsyncDirective, name as containsAbcAsyncDirectiveName} from './contains_abc_async.directive'

angular.module('app', [])
    .component(mainComponentName, MainComponent)
    .directive(containsAbcDirectiveName, containsAbcDirective)
    .directive(containsAbcAsyncDirectiveName, containsAbcAsyncDirective);
