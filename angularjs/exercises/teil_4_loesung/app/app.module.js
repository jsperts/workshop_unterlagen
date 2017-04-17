import angular from 'angular';
import ngRoute from 'angular-route';

import common from './common/common.module';
import manipulateAuthor from './manipulate_author/manipulate_author.module';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as HeaderComponent, name as headerComponentName} from './header.component';
import {default as SearchComponent, name as searchComponentName} from './search.component';
import {default as AuthorListComponent, name as authorListComponentName} from './author_list.component';
import {default as AuthorComponent, name as authorComponentName} from './author.component';
import {default as AuthorBooksComponent, name as authorBooksComponentName} from './author_books.component';

import routeConfig from './app.routes';
import appConfig from './app.config';

angular.module('app', [ngRoute, common, manipulateAuthor])
    .config(routeConfig)
    .config(appConfig)
    .component(mainComponentName, MainComponent)
    .component(headerComponentName, HeaderComponent)
    .component(searchComponentName, SearchComponent)
    .component(authorListComponentName, AuthorListComponent)
    .component(authorComponentName, AuthorComponent)
    .component(authorBooksComponentName, AuthorBooksComponent);
