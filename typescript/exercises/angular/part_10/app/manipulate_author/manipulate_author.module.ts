import * as angular from 'angular';
import 'angular-route';
import 'angular-messages';

import AddAuthorCtrl, { name as addAuthorCtrl } from './add_author.controller';
import EditAuthorCtrl, { name as editAuthorCtrl } from './edit_author.controller';

import
    yearNotInFutureDirective,
    { name as yearNotInFutureDirectiveName } from './year_not_in_future.directive';

import routeConfig from './manipulate_author.routes';

const moduleName = 'app.manipulate_author';
angular.module(moduleName, ['ngRoute', 'ngMessages'])
    .config(routeConfig)
    .controller(addAuthorCtrl, AddAuthorCtrl)
    .controller(editAuthorCtrl, EditAuthorCtrl)
    .directive(yearNotInFutureDirectiveName, yearNotInFutureDirective);

export default moduleName;
