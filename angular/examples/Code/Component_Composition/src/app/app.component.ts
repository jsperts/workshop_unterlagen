import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <item-input (addItem)="add($event)"></item-input>
    <my-list [listItems]="data"></my-list>
  `
})
export class AppComponent {
  data: Array<string> = [];

  constructor(public dataService: DataService) {
    this.data = dataService.getData();
  }

  add(item: string) {
    this.dataService.addData(item);
  }
}
