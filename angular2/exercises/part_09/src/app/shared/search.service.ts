import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  search<T extends { name: string; }>(queryString: string, list: Array<T>) {
    return list.filter((elem) => elem.name.startsWith(queryString));
  }
}
