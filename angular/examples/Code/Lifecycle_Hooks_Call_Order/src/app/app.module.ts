import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { GrandChildComponent} from './grandchild.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent, ParentComponent, GrandChildComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
