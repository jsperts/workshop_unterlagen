import angular from 'angular';
import ngResource from 'angular-resource';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as MoviesResource, name as moviesResourceName} from './movies.resource';

angular.module('app', [ngResource])
    .factory(moviesResourceName, MoviesResource)
    .component(mainComponentName, MainComponent);
