import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Date: {{ dateObject | date: 'y/M/d' }}</div>
    <div>Uppercase: {{ str | uppercase }}</div>
    <div>Lowercase: {{ str | lowercase }}</div>
    <div>JSON: {{ obj | json }}</div>
    <div>Async: {{ asyncObj | async }}</div>
    <div>Async: {{ asyncErrorObj | async }}</div>
  `
})
export class AppComponent {
  dateObject = new Date();
  str = 'Hello World!';
  obj = {
    name: 'John',
    surname: 'Doe'
  };

  asyncObj = new Promise((resolve) => {
    setTimeout(() => {
      resolve('async ok');
    }, 2000);
  });

  asyncErrorObj = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('async nok');
    }, 3000);
  });
}
