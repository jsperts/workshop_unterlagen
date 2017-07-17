import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { ListService } from './list.service';

@Component({
  template: `
    <h1>List1</h1>
    <app-adder></app-adder>
    <ul class="list-group">
      <li class="list-group-item"
          *ngFor="let num of obs$ | async">{{num}}</li>
    </ul>
  `,
})
export class List1Component implements OnInit {
  obs$: Observable<Array<number>>;

  constructor(private list: ListService) {}

  ngOnInit() {
    this.obs$ = this.list.get()
        .do(() => console.log('list 1'));
  }
}
