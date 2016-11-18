import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import { EditAuthorComponent } from './edit_author.component';
import { AuthorsService, Author } from './shared';

describe('EditAuthorComponent', () => {
  let uut: EditAuthorComponent;
  let fixture: ComponentFixture<EditAuthorComponent>;

  const routerStub = {
    navigate: function(arr: Array<string>) {}
  };
  const activatedRouteStub = {
    snapshot: {
      params: { id: '1' },
    },
  };
  const authorID1: Author = {
    _id: 1,
    name: 'dummy',
    birthYear: 1950,
    books: [],
  };
  const authorsServiceStub = {
    updateAuthor(n: Author) {
      return {
        subscribe(cb: any) { cb(); }
      };
    },
    getAuthor(id: number) {
      return {
        subscribe(cb: any) { cb(authorID1); }
      };
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule ],
      declarations: [ EditAuthorComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub},
        { provide: AuthorsService, useValue: authorsServiceStub },
      ]
    });

    fixture = TestBed.createComponent(EditAuthorComponent);
    uut = fixture.componentInstance;
  });

  const updatedAuthor: Author = { _id: 1, name: 'Author', birthYear: 1950, books: [] };

  it('should get the needed author onInit', () => {
    uut.ngOnInit();

    expect(uut.author).toEqual(authorID1);
  });

  it('should navigate to / onCancel', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    uut.onCancel();

    expect(spy).toHaveBeenCalledWith(['']);
  });

  it('should call the updateAuthor method onSubmit', () => {
    const authorsService = TestBed.get(AuthorsService);
    const spy = spyOn(authorsService, 'updateAuthor').and.returnValue({ subscribe() {} });

    uut.onSubmit(updatedAuthor);

    expect(spy).toHaveBeenCalledWith(updatedAuthor);
  });

  it('should navigate to / after successfully updating the author', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    uut.onSubmit(updatedAuthor);

    expect(spy).toHaveBeenCalledWith(['']);
  });
});
