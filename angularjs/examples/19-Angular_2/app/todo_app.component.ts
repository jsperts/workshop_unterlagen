import {Component, View, Inject} from 'angular2/core';

import TodosService from './todos.service';
import TodoInput from './todo_input.component';
import TodoList from './todo_list.component';

@Component({
  selector: 'todo-app',
  bindings: [TodosService]
})
@View({
  template: `
    <todo-input (todoAdded)="addTodo($event)"></todo-input>
    <todo-list [todos]="todos" (todoUpdated)="updateTodo($event)" (todoRemoved)="removeTodo($event)"></todo-list>
  `,
  directives: [TodoList, TodoInput],
  styles: [`
    todo-input {
      width: 100%;
      display: block;
    }
  `]
})
class TodoApp {
  constructor(@Inject(TodosService) todosService) {
    this.todosService = todosService;
    todosService.getAll((todos) => {this.todos = todos;}, (err) => {console.log(err);});
  }

  addTodo(todoTitle) {
    this.todosService.addTodo(todoTitle, (todo) => {console.log(todo);this.todos.push(todo);}, (err) => {console.log(err)});
  }

  updateTodo(todo) {
    this.todosService.updateTodo(todo, () => {}, (err) => {console.log(err)});
  }

  removeTodo(id) {
    function remove(id, todos) {
      const index = todos.findIndex((todo) => {return id === todo._id});
      todos.splice(index, 1);
    }
    this.todosService.deleteTodo(id, (id) => {remove(id, this.todos)}, (err) => {console.log(err)});
  }
}

export default TodoApp;
