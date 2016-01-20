import {Component, View, EventEmitter} from 'angular2/core';

@Component({
  selector: 'todo-input',
  outputs: ['todoAdded']
})
@View({
  template: `
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="title"/>
      <button type="submit">Add</button>
    </form>
  `,
  styles: [`
    input[type=text] {
      width: 68%;
      width: 68%;
      height: 30px;
    }
    button {
      width: 30%;
      height: 30px;
      float: right;
    }
  `]
})
class TodoInput {
  constructor() {
    this.todoAdded = new EventEmitter();
  }
  onSubmit() {
    this.todoAdded.next(this.title);
    this.title = '';
  }
}

export default TodoInput;
