import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MainComponent } from './main.component';
import { AuthorsService, Author } from './shared';

describe('MainComponent', () => {
  let uut: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  const authorsServiceStub = {
    getAuthors: jasmine.createSpy('get'),
    searchAuthors: jasmine.createSpy('search'),
    deleteAuthor: jasmine.createSpy('delete'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: AuthorsService, useValue: authorsServiceStub },
      ]
    });

    fixture = TestBed.createComponent(MainComponent);
    uut = fixture.componentInstance;
  });

  it('should get authors onInit', () => {
    const authors: Array<Author> = [{ _id: 1, name: 'Dummy', birthYear: 1950, books: [] }];
    const authorsService = TestBed.get(AuthorsService);
    authorsService.getAuthors.and.returnValue({
      subscribe(cb: any) { cb(authors); return { unsubscribe() {} }; }
    });
    uut.ngOnInit();

    expect(uut.authors).toEqual(authors);
  });

  it('should call searchAuthors and update its authors', () => {
    const authors: Array<Author> = [{ _id: 1, name: 'Dummy', birthYear: 1950, books: [] }];
    const authorsService = TestBed.get(AuthorsService);
    authorsService.searchAuthors.and.returnValue(authors);
    uut.searchAuthors('bla');

    expect(authorsService.searchAuthors).toHaveBeenCalledWith('bla');
    expect(uut.authors).toEqual(authors);
  });

  it('should call deleteAuthor and update its authors', () => {
    const authors: Array<Author> = [{ _id: 1, name: 'Dummy', birthYear: 1950, books: [] }];
    const authorsService = TestBed.get(AuthorsService);
    authorsService.deleteAuthor.and.returnValue({
      subscribe(cb: any) { cb(authors); return { unsubscribe() {} }; }
    });
    uut.deleteAuthor(1);

    expect(authorsService.deleteAuthor).toHaveBeenCalledWith(1);
    expect(uut.authors).toEqual(authors);
  });
});
