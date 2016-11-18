import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiplierDirective } from './multiplier.directive';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, MultiplierDirective ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
