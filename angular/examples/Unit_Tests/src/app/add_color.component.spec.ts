import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddColorComponent } from './add_color.component';

describe('AddColorComponent', () => {
  let uut: AddColorComponent;
  let fixture: ComponentFixture<AddColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddColorComponent ],
    });

    fixture = TestBed.createComponent(AddColorComponent);
    uut = fixture.componentInstance;
  });

  it('should emit onAdd with the color on submit', () => {
    const form = fixture.debugElement.query(By.css('form'));
    uut.newColor = 'black';

    uut.add.subscribe((color: string) => {
      expect(color).toBe('black');
    });
    form.triggerEventHandler('submit', null);
  });

  it('should set the value of newColor as default for the input field', (done) => {
    const input = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();

    // Use whenStable, ngModel update is async
    fixture.whenStable().then(() => {
      expect(input.nativeElement.value).toBe('Please type your color');
      done();
    });
  });
});
