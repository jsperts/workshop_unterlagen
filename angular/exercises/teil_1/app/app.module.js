import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as AuthorsService, name as authorsServiceName} from './authors.service';

angular.module('app', [])
    .service(authorsServiceName, AuthorsService)
    .component(mainComponentName, MainComponent);
