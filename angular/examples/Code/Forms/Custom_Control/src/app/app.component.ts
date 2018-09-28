import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html'
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      customControl: this.fb.control(0)
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

