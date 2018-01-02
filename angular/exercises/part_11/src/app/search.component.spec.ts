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

  it('should emit search with the queryString on button click', () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'test';

    const btn = fixture.debugElement.query(By.css('button'));

    uut.search.subscribe((queryString: string) => {
      expect(queryString).toBe('test');
    });
    btn.triggerEventHandler('click', null);
  });
});
