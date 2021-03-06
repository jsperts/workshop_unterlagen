import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppState, initialState } from './app.store';
import { appReducer } from './app.reducer';

import { AppComponent } from './app.component';
import { TodoListComponent } from './app-todo-list.component';
import { AddTodoComponent } from './app-add-todo.component';

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
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>, devTools: DevToolsExtension) {
    let enhancers = [];

    // Usually you would not enable it in production mode!
    if (devTools.isEnabled()) {
      enhancers = [devTools.enhancer()];
    }

    ngRedux.configureStore(
        appReducer,
        initialState,
        [],
        enhancers
    );
  }
}
