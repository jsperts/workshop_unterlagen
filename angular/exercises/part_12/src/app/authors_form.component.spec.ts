import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { Author } from './shared';
import { AuthorsFormComponent } from './authors_form.component';

describe('AuthorsFormComponent', () => {
  let uut: AuthorsFormComponent;
  let fixture: ComponentFixture<AuthorsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AuthorsFormComponent ],
    });

    fixture = TestBed.createComponent(AuthorsFormComponent);
    uut = fixture.componentInstance;
  });

  it('should add a book to the list when the addBook is called', () => {
    uut.authorToEdit = {
      _id: 1,
      name: 'Dummy',
      books: [],
      birthYear: 1950
    };
    uut.bookToAdd = 'new book';
    uut.addBook();

    expect(uut.authorToEdit.books).toEqual(['new book']);
  });

  it('should remove the book from the list when the removeBook btn is clicked', () => {
    uut.authorToEdit = <Author>{
      books: ['new book', 'other book']
    };

    fixture.detectChanges();

    const removeBtn = fixture.debugElement.query(By.css('.glyphicon-remove'));
    removeBtn.triggerEventHandler('click', null);
    expect(uut.authorToEdit.books).toEqual(['other book']);
  });

  it('should copy the given author and set it as value for authorToEdit', () => {
    const author: Author = {
      _id: 1,
      name: 'Dummy',
      books: [],
      birthYear: 1950
    };
    uut.author = author;

    expect(uut.authorToEdit).not.toBe(author);
    expect(uut.authorToEdit).toEqual(author);
  });

  it('should emit submit when onSubmit is called', () => {
    const author: Author = {
      _id: 1,
      name: 'Dummy',
      books: [],
      birthYear: 1950
    };
    uut.authorToEdit = author;

    uut.submit.subscribe((submittedAuthor: Author) => {
      expect(submittedAuthor).toEqual(author);
    });

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', { stopPropagation() {} });
  });
});
