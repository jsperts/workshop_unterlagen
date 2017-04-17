import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { SelectColorComponent } from './select_color.component';
import { AddColorComponent } from './add_color.component';
import { PaintDirective } from './paint.directive';

import { SendToServerService } from './send_to_server.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, SelectColorComponent, AddColorComponent, PaintDirective ],
    providers: [ SendToServerService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
