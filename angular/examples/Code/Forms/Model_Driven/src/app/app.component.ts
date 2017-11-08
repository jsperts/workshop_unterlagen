import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html'
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  genders = [
      {value: 'M', displayValue: 'Male'},
      {value: 'F', displayValue: 'Female'},
  ];
  languages = [
      {displayValue: 'English (US)', lang: 'En', locale: 'US', id: 1},
      {displayValue: 'English (UK)', lang: 'En', locale: 'UK', id: 2},
      {displayValue: 'German (DE)', lang: 'De', locale: 'DE', id: 3},
  ];
  countries = ['UK', 'USA', 'Germany'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: this.fb.control(''), // FormControl
      passwords: this.fb.group({ // FormGroup
        password: this.fb.control(''),
        passwordRepeat: this.fb.control(''),
      }),
      gender: this.fb.control(this.genders[0].value),
      country: this.fb.control('Germany'),
      language: this.fb.control(this.languages[2]),
      privacy: this.fb.control(false),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

