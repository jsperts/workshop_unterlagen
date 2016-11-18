import { Component } from '@angular/core';

const data1 = ['Foo', 'Bar', 'Baz'];
const data2 = ['Baz', 'Foobar', 'Foo'];

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-12 text-center">
        <div class="btn-group" style="margin-bottom: 20px">
          <button type="button" class="btn btn-default" (click)="changeList()">Change List</button>
          <span class="btn btn-info">Current list: {{currentList}}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <parent-comp [list]="list" class="col-xs-offset-4 col-xs-4"></parent-comp>
    </div>
  `,
})
export class AppComponent {
  list = data1;
  currentList = 'data1';

  changeList() {
    if (this.currentList === 'data1') {
      this.list = data2;
      this.currentList = 'data2';
    } else {
      this.list = data1;
      this.currentList = 'data1';
    }
  }
}
