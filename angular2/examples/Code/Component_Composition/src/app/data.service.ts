import { Injectable } from '@angular/core';

const data = ['data 1', 'data 2', 'data 3'];

@Injectable()
export class DataService {
  data: Array<string> = data;
  getData(): Array<string> {
    return this.data;
  }
  addData(newElement: string) {
    this.data.push(newElement);
  }
}
