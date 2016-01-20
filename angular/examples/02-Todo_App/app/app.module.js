import angular from 'angular';

import {default as TodoAppComponent, name as todoAppComponentName} from './main.component';
import {default as TodoInputComponent, name as todoInputNameComponent} from './todo_input.component';
import {default as TodoListComponent, name as todoListComponentName} from './todo_list.component';
import {default as TodoItemComponent, name as todoItemComponentName} from './todo_item.component';

angular.module('app', [])
    .component(todoAppComponentName, TodoAppComponent)
    .component(todoInputNameComponent, TodoInputComponent)
    .component(todoListComponentName, TodoListComponent)
    .component(todoItemComponentName, TodoItemComponent);
