const authors = [{
  _id: 1,
  name: 'Ian Fleming',
  birthYear: 1908,
  books: ['Dr. No', 'Goldfinger', 'Thunderball']
}, {
  _id: 2,
  name: 'Agatha Christie',
  birthYear: 1890,
  books: ['Murder on the Orient Express', 'Death on the Nile']
}, {
  _id: 3,
  name: 'Dan Brown',
  birthYear: 1964,
  books: ['Digital Fortress', 'Angels and Demons', 'The Da Vinci Code']
}, {
  _id: 4,
  name: 'Isaac Asimov',
  birthYear: 1920,
  books: ['The Neutrino', 'The Human Brain']
}];

class AuthorsService {
  constructor() {
    this.data = authors;
  }

  getAuthors() {
    return this.data;
  }
}

export default AuthorsService;
export const name = 'AuthorsService';
