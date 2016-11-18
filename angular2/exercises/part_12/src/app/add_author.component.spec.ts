import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterModule, Router } from '@angular/router';

import { AddAuthorComponent } from './add_author.component';
import { AuthorsService, NewAuthor } from './shared';

describe('AddAuthorComponent', () => {
  let uut: AddAuthorComponent;
  let fixture: ComponentFixture<AddAuthorComponent>;

  const routerStub = {
    navigate: function(arr: Array<string>) {}
  };
  const authorsServiceStub = {
    addAuthor(n: NewAuthor) {
      return {
        subscribe(cb: any) { cb(); }
      };
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule ],
      declarations: [ AddAuthorComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: AuthorsService, useValue: authorsServiceStub },
      ]
    });

    fixture = TestBed.createComponent(AddAuthorComponent);
    uut = fixture.componentInstance;
  });

  const newAuthor: NewAuthor = { name: 'Author', birthYear: 1950, books: [] };

  it('should navigate to / onCancel', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    uut.onCancel();

    expect(spy).toHaveBeenCalledWith(['']);
  });

  it('should call the addAuthor method onSubmit', () => {
    const authorsService = TestBed.get(AuthorsService);
    const spy = spyOn(authorsService, 'addAuthor').and.returnValue({ subscribe() {} });

    uut.onSubmit(newAuthor);

    expect(spy).toHaveBeenCalledWith(newAuthor);
  });

  it('should navigate to / after successfully adding the author', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    uut.onSubmit(newAuthor);

    expect(spy).toHaveBeenCalledWith(['']);
  });
});
