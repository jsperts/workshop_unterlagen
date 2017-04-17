import { TestBed } from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { AuthorsService, Author, NewAuthor } from './authors.service';
import { SearchService } from './search.service';

describe('AuthorsService', () => {
  let uut: AuthorsService;
  let backend: MockBackend;
  let http: Http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });

    http = TestBed.get(Http);
    backend = TestBed.get(XHRBackend);
    const searchService = new SearchService();
    uut = new AuthorsService(searchService, http);
  });

  it('should return the authors (getAuthors method)', (done) => {
    const authors: Array<Author> = [{ _id: 1, name: 'Dummy', birthYear: 1034, books: [] }];
    const options = new ResponseOptions({ status: 200, body: authors });
    const response = new Response(options);
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    uut.getAuthors().subscribe((res) => {
      expect(res).toEqual(authors);
      done();
    });
  });

  it('should return the authors minus the deleted one (deleteAuthor method)', (done) => {
    uut.data = [{ _id: 1, name: 'Dummy', birthYear: 1034, books: [] }];

    const options = new ResponseOptions({ status: 200 });
    const response = new Response(options);
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    uut.deleteAuthor(1).subscribe((res) => {
      expect(res).toEqual([]);
      done();
    });
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
