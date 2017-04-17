import angular from 'angular';

import {default as AuthorsService, name as authorsServiceName} from './authors.service';
import {default as FilterService, name as filterServiceName} from './filter.service';

const moduleName = 'app.common';

angular.module(moduleName, [])
    .service(authorsServiceName, AuthorsService)
    .service(filterServiceName, FilterService);

export default moduleName;
