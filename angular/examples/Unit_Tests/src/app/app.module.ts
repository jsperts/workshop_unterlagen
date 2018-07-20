import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { SelectColorComponent } from './select-color.component';
import { AddColorComponent } from './add-color.component';
import { PaintDirective } from './paint.directive';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, SelectColorComponent, AddColorComponent, PaintDirective ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
