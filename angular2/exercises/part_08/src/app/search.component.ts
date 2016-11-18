import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="row panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Search</h3>
      </div>
      <div class="panel-body">
        <form (ngSubmit)="searchAuthors()">
          <div class="col-sm-8">
            <input
              class="form-control"
              type="text"
              name="query"
              [(ngModel)]="queryString"
            />
          </div>
          <div>
            <button
              class="btn btn-primary col-sm-4"
              type="submit"
            >Search</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class SearchComponent {
  @Output() search = new EventEmitter();
  queryString = '';

  searchAuthors() {
    this.search.emit(this.queryString);
  }
}
