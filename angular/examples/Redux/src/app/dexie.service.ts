import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  constructor() {
    super('Ng2DexieReduxSample');
    this.version(1).stores({
      todos: '++id',
    });
  }
}
