import angular from 'angular';
import ngRoute from 'angular-route';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as HeaderComponent, name as headerComponentName} from './header.component';
import {default as SearchComponent, name as searchComponentName} from './search.component';
import {default as AuthorListComponent, name as authorListComponentName} from './author_list.component';
import {default as AuthorComponent, name as authorComponentName} from './author.component';
import {default as AuthorBooksComponent, name as authorBooksComponentName} from './author_books.component';
import {default as AddAuthorComponent, name as addAuthorComponentName} from './add_author.component';
import {default as EditAuthorComponent, name as editAuthorComponentName} from './edit_author.component';

import {default as AuthorsService, name as authorsServiceName} from './authors.service';
import {default as FilterService, name as filterServiceName} from './filter.service';

import routeConfig from './app.routes.js';

angular.module('app', [ngRoute])
    .config(routeConfig)
    .component(mainComponentName, MainComponent)
    .component(headerComponentName, HeaderComponent)
    .component(searchComponentName, SearchComponent)
    .component(authorListComponentName, AuthorListComponent)
    .component(authorComponentName, AuthorComponent)
    .component(authorBooksComponentName, AuthorBooksComponent)
    .component(addAuthorComponentName, AddAuthorComponent)
    .component(editAuthorComponentName, EditAuthorComponent)
    .service(authorsServiceName, AuthorsService)
    .service(filterServiceName, FilterService);
