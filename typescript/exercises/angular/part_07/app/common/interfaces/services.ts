import {Author, AuthorWithID} from './author';

export interface FilterServiceInstance {
  filterList(list: Array<any>, searchTerm: string): Array<any>;
}

export interface FilterServiceCtor {
  (): FilterServiceInstance;
}

export interface AuthorsServiceInstance {
  data: Array<AuthorWithID>;
  filterService: FilterServiceInstance;
  addAuthor(a: Author): any;
  getAuthors(): any;
  getAuthor(): any;
  deleteAuthor(id: number): any;
  updateAuthor(a: AuthorWithID): any;
  filter(a: string): Array<AuthorWithID>;
}

export interface AuthorsServiceCtor {
  (a: FilterServiceInstance, b: any, c: any): AuthorsServiceInstance;
}
