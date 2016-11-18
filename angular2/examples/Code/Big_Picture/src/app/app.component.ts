import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let str of data">
        <span>{{str | uppercase}}</span>
      </li>
    </ul>
  `
})
export class AppComponent {
  data: Array<string> = [];
  constructor(dataService: DataService) {
    this.data = dataService.getData();
  }
}
