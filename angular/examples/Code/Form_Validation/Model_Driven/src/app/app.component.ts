import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';

import { equals, usernameExists } from './validation_functions';

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html',
  styles: ['.ng-invalid{border: 1px solid red;}']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  states = ['valid', 'errors', 'pending'];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      // [defaultValue, synchronous validators, async validators]
      username: ['', Validators.required, usernameExists()],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordRepeat: ['']
      }, {
        validator: equals()
      }),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}

