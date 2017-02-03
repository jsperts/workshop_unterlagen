import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { store, AppState } from './app.store';

import { AppComponent } from './app.component';
import { TodoListComponent } from './app-todo-list.component';
import { AddTodoComponent } from './app-add-todo.component';

import { TodosService } from './todos.service';
import { AppActions } from './app.actions';
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
        NgReduxModule,
    ],
    providers: [
        TodosService,
        AppActions,
        DexieService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);
  }
}
