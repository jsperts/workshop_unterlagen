import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="row panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Search</h3>
      </div>
      <div class="panel-body">
        <div class="col-sm-8">
          <input class="form-control" type="text"/>
        </div>
        <div>
          <button
            class="btn btn-primary col-sm-4"
            type="button"
            (click)="searchAuthors()"
          >Search</button>
        </div>
      </div>
    </div>
  `
})
export class SearchComponent {
  searchAuthors() {
    console.log('search');
  }
}
