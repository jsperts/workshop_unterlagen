import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { tap } from 'rxjs/operators';

class List {
  constructor() {
    this.arr = [];
    this.subject = new BehaviorSubject([]);
  }

  add(num) {
    this.arr.push(num);
    this.subject.next(this.arr);
  }

  get() {
    return this.subject.asObservable();
  }
}

const list = new List();

const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const addBtn = document.getElementById('add');

fromEvent(addBtn, 'click').subscribe(() => {
  list.add(Math.random());
});

list
  .get()
  .pipe(tap(() => console.log('list 1')))
  .subscribe(lst => {
    list1.innerHTML = lst
      .map(elm => `<li class="list-group-item">${elm}</li>`)
      .join('');
  });

list
  .get()
  .pipe(tap(() => console.log('list 2')))
  .subscribe(lst => {
    list2.innerHTML = lst
      .map(elm => `<li class="list-group-item">${elm}</li>`)
      .join('');
  });
