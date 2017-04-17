import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as MoviesService, name as moviesServiceName} from './movies.service';

angular.module('app', [])
    .service(moviesServiceName, MoviesService)
    .component(mainComponentName, MainComponent);
