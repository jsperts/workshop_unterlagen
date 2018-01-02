import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { AuthorsListComponent } from './authors-list.component';
import { Author } from './shared';

describe('AuthorsListComponent', () => {
  let uut: AuthorsListComponent;
  let fixture: ComponentFixture<AuthorsListComponent>;

  const routerStub = {
    navigate: function(arr: Array<string>) {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule ],
      declarations: [ AuthorsListComponent ],
      providers: [
        { provide: Router, useValue: routerStub }
      ]
    });

    fixture = TestBed.createComponent(AuthorsListComponent);
    uut = fixture.componentInstance;
  });
  const authors: Array<Author> = [
    { _id: 1, name: 'Dummy1', birthYear: 1950, books: [] },
    { _id: 2, name: 'Dummy2', birthYear: 1950, books: [] },
    { _id: 3, name: 'Dummy3', birthYear: 1950, books: [] }
  ];

  it('should navigate to /add addAuthor',  () => {
    const spy = spyOn(TestBed.get(Router), 'navigate');
    const addBtn = fixture.debugElement.query(By.css('.glyphicon-plus'));

    addBtn.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalledWith(['add']);
  });

  it('should navigate to /edit/:id editAuthor', () => {
    const spy = spyOn(TestBed.get(Router), 'navigate');

    uut.authors = authors;
    fixture.detectChanges();

    const editBtn = fixture.debugElement.query(By.css('.glyphicon-edit'));

    editBtn.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalledWith(['edit', '1']);
  });

  it('should emit delete on deleteAuthor with the given id', () => {
    uut.authors = authors;
    fixture.detectChanges();

    const deleteBtn = fixture.debugElement.query(By.css('.glyphicon-remove'));

    uut.delete.subscribe((id: number) => {
      expect(id).toBe(1);
    });

    deleteBtn.triggerEventHandler('click', null);
  });

  // Hard to write a robust test for this -> each Author should be its own component
  // This would make writing the test trivial
  xit('should get a list of authors via input and display those', () => {});

  // The message could be its own component.
  // This would make the test more robust
  it('should display a message if the authors list is empty', () => {
    uut.authors = [];
    fixture.detectChanges();

    const listElement = fixture.debugElement.queryAll(By.css('li'));
    const msg = listElement[listElement.length - 1].children[0].query(By.css('.panel-heading'));
    expect(msg.nativeElement.textContent).toContain('Sorry no');
  });
});
