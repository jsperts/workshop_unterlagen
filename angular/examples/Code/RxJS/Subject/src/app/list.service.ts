import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ListService {
  private _subject: BehaviorSubject<Array<number>>;
  private _arr: Array<number> = [];

  constructor() {
    this._subject = new BehaviorSubject([]);
  }

  add(num: number) {
    this._arr.push(num);
    this._subject.next(this._arr);
  }

  get() {
    return this._subject.asObservable();
  }
}
