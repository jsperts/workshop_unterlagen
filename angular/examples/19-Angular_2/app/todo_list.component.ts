import {Component, View, EventEmitter} from 'angular2/core';

import TodoItem from './todo_item.component';

@Component({
  selector: 'todo-list',
  inputs: ['todos'],
  outputs: ['todoUpdated', 'todoRemoved']
})
@View({
  template: `
    <ul>
      <li *ngFor="#todo of todos">
        <todo-item [todo]="todo" (todoUpdated)="updateTodo($event)" (todoRemoved)="removeTodo($event)"></todo-item>
      </li>
    </ul>
  `,
  directives: [TodoItem],
  styles: [`
    ul {
      margin: 0;
      padding: 0;
      width: 100%;
    }

    li {
      list-style: none;
      height: 30px;
      background-color: white;
      margin-top: 2px;
    }

    todo-item {
      height: 30px;
      display: block;
    }
  `]
})
class TodoList {
  constructor() {
    this.todoUpdated = new EventEmitter();
    this.todoRemoved = new EventEmitter();
  }

  updateTodo(todo) {
    this.todoUpdated.next(todo);
  }

  removeTodo(id) {
    this.todoRemoved.next(id);
  }
}

export default TodoList;
