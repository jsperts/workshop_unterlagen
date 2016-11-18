import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html',
  styles: ['.hide {display: none !important;}'],
})
export class AppComponent {
  states = ['valid', 'errors'];
  user = { // Default values
    username: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
