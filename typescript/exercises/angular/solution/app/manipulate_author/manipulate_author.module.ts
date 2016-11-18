import * as angular from 'angular';
import 'angular-route';
import 'angular-messages';

import AddAuthorComponent, {name as addAuthorComponentName} from './add_author.component';
import EditAuthorComponent, {name as editAuthorComponentName} from './edit_author.component';
import AuthorsFormComponent, {name as authorsFormComponentName} from './authors_form.component';

import
    yearNotInFutureDirective,
    {name as yearNotInFutureDirectiveName}
from './year_not_in_future.directive';

const moduleName = 'app.manipulate_author';

import routeConfig from './manipulate_author.routes';

angular.module(moduleName, ['ngRoute', 'ngMessages'])
    .config(routeConfig)
    .component(addAuthorComponentName, AddAuthorComponent)
    .component(editAuthorComponentName, EditAuthorComponent)
    .component(authorsFormComponentName, AuthorsFormComponent)
    .directive(yearNotInFutureDirectiveName, yearNotInFutureDirective);

export default moduleName;
