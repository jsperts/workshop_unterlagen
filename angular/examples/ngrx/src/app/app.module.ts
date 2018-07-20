import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './app.reducer';
import { AppActions } from './app.actions';

import { AppComponent } from './app.component';
import { TodoListComponent } from './app-todo-list.component';
import { AddTodoComponent } from './app-add-todo.component';

import { TodosService } from './todos.service';
import { DexieService } from './dexie.service';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        AddTodoComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({app: appReducer}),
        EffectsModule.forRoot([AppActions])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
