import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as HeaderComponent, name as headerComponentName} from './header.component';
import {default as SearchComponent, name as searchComponentName} from './search.component';
import {default as AuthorListComponent, name as authorListComponentName} from './author_list.component';
import {default as AuthorComponent, name as authorComponentName} from './author.component';
import {default as AuthorBooksComponent, name as authorBooksComponentName} from './author_books.component';

import {default as AuthorsService, name as authorsServiceName} from './authors.service';
import {default as FilterService, name as filterServiceName} from './filter.service';

angular.module('app', [])
    .component(mainComponentName, MainComponent)
    .component(headerComponentName, HeaderComponent)
    .component(searchComponentName, SearchComponent)
    .component(authorListComponentName, AuthorListComponent)
    .component(authorComponentName, AuthorComponent)
    .component(authorBooksComponentName, AuthorBooksComponent)
    .service(authorsServiceName, AuthorsService)
    .service(filterServiceName, FilterService);
