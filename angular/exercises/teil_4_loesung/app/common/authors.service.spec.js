import angular from 'angular';

describe('authors service', () => {
  let authorsService, filterService, $httpBackend;

  beforeEach(() => {
    angular.mock.module('app.common');
    angular.mock.inject((_$httpBackend_, _AuthorsService_, _FilterService_) => {
      authorsService = _AuthorsService_;
      $httpBackend = _$httpBackend_;
      filterService = _FilterService_;
      spyOn(filterService, 'filterList');
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('addAuthor', () => {
    const author = {
      name: 'Dummy',
      books: [],
      birthYear: 1500
    };

    it('should call the backend with the given author', () => {
      $httpBackend.expectPOST(authorsService.baseUrl, JSON.stringify(author)).respond(200);
      authorsService.addAuthor(author);
      $httpBackend.flush();
    });

    it('should add the backend reply to the data array', () => {
      $httpBackend.whenPOST(authorsService.baseUrl).respond(200, author);
      authorsService.addAuthor(author);
      $httpBackend.flush();
      expect(authorsService.data).toEqual([author]);
    });
  });

  describe('deleteAuthor', () => {
    const author = {
      name: 'Dummy',
      books: [],
      birthYear: 1500,
      _id: 1
    };

    it('should call the backend with the given id', () => {
      authorsService.data.push(author);
      $httpBackend.expectDELETE(`${authorsService.baseUrl}${author._id}`).respond(200);
      authorsService.deleteAuthor(author._id);
      $httpBackend.flush();
    });

    it('should add the backend reply to the data array', () => {
      authorsService.data.push(author);
      $httpBackend.whenDELETE(`${authorsService.baseUrl}${author._id}`).respond(200);
      authorsService.deleteAuthor(author._id);
      $httpBackend.flush();
      expect(authorsService.data).toEqual([]);
    });
  });

  describe('getAuthors', () => {
    const authors = [{
      name: 'Dummy',
      books: [],
      birthYear: 1500,
      _id: 1
    }];

    it('should call the backend and add the returned data to the data array', () => {
      $httpBackend.whenGET(authorsService.baseUrl).respond(200, authors);
      authorsService.getAuthors();
      $httpBackend.flush();
      expect(authorsService.data).toEqual(authors);
    });
  });

  describe('getAuthor', () => {
    const author = {
      name: 'Dummy',
      books: [],
      birthYear: 1500,
      _id: 1
    };

    it('should return the author with the given id if we have data', () => {
      authorsService.data = [author];
      authorsService.getAuthor(author._id).then((auth) => {
        expect(auth).toEqual(author);
      });
    });

    it('should call the server to get the authors and return the author with the given id', () => {
      $httpBackend.whenGET(authorsService.baseUrl).respond(200, [author]);
      authorsService.data = [];
      authorsService.getAuthor(author._id).then((auth) => {
        expect(auth).toEqual(author);
      });
      $httpBackend.flush();
    });
  });

  describe('updateAuthor', () => {
    const author = {
      name: 'Dummy',
      books: [],
      birthYear: 1500,
      _id: 1
    };
    const authorToUpdate = {
      name: 'not a dummy',
      books: [],
      birthYear: 1400,
      _id: 1
    };

    it('should call the backend with the given author', () => {
      authorsService.data = [author];
      $httpBackend.expectPUT(`${authorsService.baseUrl}${authorToUpdate._id}`, JSON.stringify(authorToUpdate)).respond(200);
      authorsService.updateAuthor(authorToUpdate);
      $httpBackend.flush();
    });

    it('should update the author in the data array', () => {
      authorsService.data = [author];
      $httpBackend.whenPUT(`${authorsService.baseUrl}${authorToUpdate._id}`).respond(200);
      authorsService.updateAuthor(authorToUpdate);
      $httpBackend.flush();
      expect(authorsService.data).toEqual([authorToUpdate]);
    });
  });

  describe('filter', () => {
    it('should call the filter service with the current list and the given search term', () => {
      const data = ['a', 'b'];
      const searchTerm = 'abc';
      authorsService.data = data;
      authorsService.filter(searchTerm);
      expect(filterService.filterList).toHaveBeenCalledWith(data, searchTerm);
    });
  });
});
