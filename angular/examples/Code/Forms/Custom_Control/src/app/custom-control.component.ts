import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-control',
  template: `
    <div class="btn-group">
      <button [disabled]="isDisabled" (click)="onClick('sub')" type="button" class="btn btn-primary">-</button>
      <input readonly class="btn btn-default" [value]="value"/>
      <button [disabled]="isDisabled" (click)="onClick('add')" type="button" class="btn btn-primary">+</button>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    }
  ]
})
export class CustomControlComponent implements ControlValueAccessor {
  onChange: (val: number) => void;
  onTouched: () => void;
  value = 0;
  isDisabled = false;
  private touched = false;

  registerOnChange(fn: (val: number) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: number) {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  onClick(action: 'sub'|'add') {
    if (action === 'sub') {
      this.value = this.value - 1;
    } else {
      this.value = this.value + 1;
    }

    this.onChange(this.value);

    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }
}
