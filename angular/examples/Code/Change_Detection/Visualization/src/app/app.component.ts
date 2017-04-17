import { Component, DoCheck } from '@angular/core';

const data = ['Foo', 'Bar', 'Baz'];

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-12 text-center">
        <div class="btn-group" style="margin-bottom: 20px">
          <button type="button" class="btn btn-default" (click)="changeContent()">Change Content</button>
          <button type="button" class="btn btn-default" (click)="changeRef('list1')">Change Ref List 1</button>
          <button type="button" class="btn btn-default" (click)="changeRef('list2')">Change Ref List 2</button>
          <span class="btn btn-info">Change Detections {{count}}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <cd-default [list]="lists.list1" class="col-xs-3"></cd-default>
      <div class="col-xs-1"></div>
      <cd-onpush [list]="lists.list1" class="col-xs-3"></cd-onpush>
      <div class="col-xs-1"></div>
      <cd-onpush [list]="lists.list2" class="col-xs-3"></cd-onpush>
    </div>
  `,
})
export class AppComponent implements DoCheck {
  lists: { [name: string]: Array<string> } = {
    list1: data,
    list2: data,
  };
  count = 0;

  changeContent() {
    this.lists['list1'][0] = 'Foobar';
    this.lists['list2'][0] = 'Foobar';
  }

  changeRef(name: string) {
    this.lists[name] = [...this.lists[name]];
  }

  ngDoCheck() {
    this.count++;
  }
}
