import AuthorsService, { name as authorsServiceName } from './common/authors.service';

import { AuthorWithID } from './common/interfaces/author';

class MainCtrl {
  authors: Array<AuthorWithID>;

  constructor(private authorsService: AuthorsService) {
    authorsService.getAuthors().then((data: Array<AuthorWithID>) => {
      this.authors = data;
    }).catch((resp) => {
      console.log(resp);
    });
  }

  search (searchTerm: string) {
    this.authors = this.authorsService.filter(searchTerm);
  }

  remove(id: number) {
    this.authorsService.deleteAuthor(id).then((data) => {
      this.authors = data;
    }).catch((resp) => {
      console.log(resp);
    });
  }
}

MainCtrl.$inject = [authorsServiceName];

export default MainCtrl;
export const name = 'mainCtrl';
