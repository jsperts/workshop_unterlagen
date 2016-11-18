import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html',
})
export class AppComponent {
  states = ['pristine', 'dirty', 'untouched', 'touched', 'valid', 'submitted'];
  user = { // Default values
    username: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
