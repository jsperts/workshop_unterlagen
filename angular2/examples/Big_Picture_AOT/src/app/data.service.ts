import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getData(): Array<string> {
    return ['data 1', 'data 2', 'data 3'];
  }
}
