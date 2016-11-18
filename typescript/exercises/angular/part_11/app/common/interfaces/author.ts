export interface Author {
  name: string;
  birthYear: number;
  books: Array<string>;
}

export interface AuthorWithID extends Author {
  _id: number;
}
