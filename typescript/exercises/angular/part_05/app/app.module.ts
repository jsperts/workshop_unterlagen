///<reference path="../typings/index.d.ts"/>

import * as angular from 'angular';
import 'angular-route';

import appCommonModule from './common/common.module';
import appManipulateAuthorModule from './manipulate_author/manipulate_author.module';

import AuthorListCtrl, { name as authorListCtrlName } from './author_list.controller';
import MainCtrl, { name as mainCtrlName } from './main.controller';
import SearchCtrl, { name as searchCtrlName } from './search.controller';

import routeConfig from './app.routes';
angular.module('app', ['ngRoute', appCommonModule, appManipulateAuthorModule])
    .config(routeConfig)
    .controller(authorListCtrlName, AuthorListCtrl)
    .controller(mainCtrlName, MainCtrl)
    .controller(searchCtrlName, SearchCtrl);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, ['app']);
});
