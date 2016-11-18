import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SelectColorComponent } from './select_color.component';

describe('SelectColorComponent', () => {
  let uut: SelectColorComponent;
  let fixture: ComponentFixture<SelectColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectColorComponent ],
      schemas: [ NO_ERRORS_SCHEMA ], // ignore [color] and paint
    });

    fixture = TestBed.createComponent(SelectColorComponent);
    uut = fixture.componentInstance;
  });

  it('should repeat over the colors in the colors array', () => {
    uut.colors = ['red', 'green'];

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('div')).length).toBe(2);
  });

  it('should update selectedColor when a color is clicked', () => {
    uut.colors = ['red', 'green'];

    fixture.detectChanges();

    fixture.debugElement.query(By.css('div')).triggerEventHandler('click', null);
    expect(uut.selectedColor).toBe('red');
  });

  it('should update the DOM when a color is clicked', () => {
    uut.colors = ['red', 'green'];

    fixture.detectChanges();

    fixture.debugElement.query(By.css('div')).triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain('red');
  });
});
