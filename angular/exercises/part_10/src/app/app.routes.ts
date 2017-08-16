import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AddAuthorComponent } from './add-author.component';
import { EditAuthorComponent } from './edit-author.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add', component: AddAuthorComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(routes);
