import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let uut: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchComponent ],
    });

    fixture = TestBed.createComponent(SearchComponent);
    uut = fixture.componentInstance;
  });

  it('should emit search with the queryString on submit', () => {
    const form = fixture.debugElement.query(By.css('form'));
    uut.queryString = 'test';

    uut.search.subscribe((queryString: string) => {
      expect(queryString).toBe('test');
    });
    form.triggerEventHandler('submit', null);
  });

  it('should connect the queryString member with the input field', () => {
    const input = fixture.debugElement.query(By.css('input'));

    // Trigger a model change simulating the user writing 'some string'
    input.triggerEventHandler('ngModelChange', 'some string');

    expect(uut.queryString).toBe('some string');
  });
});
