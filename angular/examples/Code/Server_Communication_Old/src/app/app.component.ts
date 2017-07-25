import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Data</h1>
    <div>
      <button (click)="addData()" class="btn btn-primary">Add data</button>
      <button (click)="causeError()" class="btn btn-danger">Error</button>
      <button (click)="getWithQuery()" class="btn btn-warning">Query params</button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let d of data; trackBy:d?.id">
        {{d.name}}
        <button (click)="deleteData(d.id)">Delete</button>
      </li>
    </ul>
  `,
  providers: [DataService],
})
export class AppComponent implements OnInit, OnDestroy {
  data: Array<{ id: number; name: string; }> = [];
  getSubscription: Subscription;
  addSubscription: Subscription;
  deleteSubscription: Subscription;
  querySubscription: Subscription;
  errorSubscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getSubscription = this.dataService
        .getData()
        .subscribe(
            (data) => {
              this.data = data;
            },
            (e) => {
              console.log('Error:', e);
            }
        );
  }

  ngOnDestroy() {
    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }

    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }

    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }

    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }

    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }

  addData() {
    const name = 'Dummy Name';
    this.addSubscription = this.dataService
        .sendData(name)
        .subscribe(
            (data) => {
              this.data.push(data);
            },
            (e) => {
              console.log('Error:', e);
            }
        );
  }

  deleteData(id: number) {
    this.deleteSubscription = this.dataService
        .deleteData(id)
        .subscribe(
            (_id) => {
              this.data = this.data.filter((data) => data.id !== _id);
            },
            (e) => {
              console.log('Error:', e);
            }
        );
  }

  causeError() {
    this.errorSubscription = this.dataService
        .getWithError()
        .subscribe(
            () => {},
            (e) => {
              console.log(e);
            }
        );
  }

  getWithQuery() {
    this.querySubscription = this.dataService
        .getWithQuery()
        .subscribe();
  }
}
