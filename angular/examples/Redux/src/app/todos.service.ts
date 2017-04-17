import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';

export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoWithID extends Todo {
  id: number;
}

@Injectable()
export class TodosService {
  table: Dexie.Table<TodoWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('todos');
  }

  getAll() {
    return this.table.toArray();
  }

  add(data: Todo) {
    return this.table.add(<TodoWithID>data);
  }

  update(id: number, data: { done: boolean }) {
    return this.table.update(id, data);
  }

  remove(id: number) {
    return this.table.delete(id);
  }
}
