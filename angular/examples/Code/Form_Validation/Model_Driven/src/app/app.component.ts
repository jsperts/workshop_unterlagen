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
      username: this.fb.control('', Validators.required, usernameExists()),
      passwords: this.fb.group({
        // Async validators use composeAsync
        password: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
        passwordRepeat: this.fb.control(''),
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

