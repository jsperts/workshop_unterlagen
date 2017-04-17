import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AddAuthorComponent } from './add_author.component';
import { EditAuthorComponent } from './edit_author.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add', component: AddAuthorComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(routes);
