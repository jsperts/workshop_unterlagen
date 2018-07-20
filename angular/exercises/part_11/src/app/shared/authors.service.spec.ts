import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AuthorsService, Author, NewAuthor } from './authors.service';
import { SearchService } from './search.service';

describe('AuthorsService', () => {
  let uut: AuthorsService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    const searchService = new SearchService();
    uut = new AuthorsService(searchService, http);
  });

  it('should return the authors (getAuthors method)', () => {
    const authors: Array<Author> = [{ _id: 1, name: 'Dummy', birthYear: 1034, books: [] }];

    uut.getAuthors().subscribe((res) => {
      expect(res).toEqual(authors);
    });

    const request = httpMock.expectOne('http://127.0.0.1:3000/authors');

    request.flush(authors);
  });

  it('should return the authors minus the deleted one (deleteAuthor method)', () => {
    uut.data = [{ _id: 1, name: 'Dummy', birthYear: 1034, books: [] }];

    uut.deleteAuthor(1).subscribe((res) => {
      expect(res).toEqual([]);
    });

    const request = httpMock.expectOne('http://127.0.0.1:3000/authors/1');

    request.flush({});
  });

  it('should return the authors matching the query string', () => {
    uut.data = [{ _id: 1, name: 'Dummy', birthYear: 1034, books: [] }];

    const res = uut.searchAuthors('bla');

    expect(res).toEqual([]);
  });

  it('should post the new author (addAuthor method)', () => {
    const spy = spyOn(http, 'post');

    const authorToAdd: NewAuthor = {
      name: 'Dummy',
      birthYear: 1920,
      books: [],
    };
    uut.addAuthor(authorToAdd);

    expect(spy.calls.argsFor(0)[1]).toEqual(authorToAdd);
  });

  it('should put the updated author', () => {
    const spy = spyOn(http, 'put');

    const authorToUpdate: Author = {
      _id: 1,
      name: 'Dummy',
      birthYear: 1920,
      books: [],
    };
    uut.updateAuthor(authorToUpdate);

    expect(spy.calls.argsFor(0)[1]).toEqual(authorToUpdate);
    expect(spy.calls.argsFor(0)[0].endsWith('1')).toBe(true);
  });
});
