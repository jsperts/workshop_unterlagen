import * as angular from 'angular';
import AuthorsService, { name as authorsServiceName } from './authors.service';
import FilterService, { name as filterServiceName } from './filter.service';

const moduleName = 'app.common';
angular.module(moduleName, [])
    .service(authorsServiceName, AuthorsService)
    .service(filterServiceName, FilterService);

export default moduleName;
