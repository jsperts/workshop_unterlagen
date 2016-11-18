import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PaintDirective } from './paint.directive';

@Component({
  selector: 'test-comp',
  template: `
      <div paint [color]="color"></div>
    `
})
class TestComponent {
  color = 'green';
}

describe('PaintDirective', () => {
  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PaintDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
  });

  it('should change the background color of the element to be the given color', () => {
    fixture.detectChanges();

    const expectedColor = fixture.debugElement.query(By.directive(PaintDirective)).nativeElement.style.backgroundColor;
    expect(expectedColor).toBe('green');
  });
});
