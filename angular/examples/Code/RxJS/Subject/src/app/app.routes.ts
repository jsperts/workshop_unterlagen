import { RouterModule, Routes } from '@angular/router';

import { List1Component } from './list1.component';
import { List2Component } from './list2.component';

const routes: Routes = [
  { path: '', redirectTo: 'list1', pathMatch: 'full' },
  { path: 'list1', component: List1Component },
  { path: 'list2', component: List2Component },
];

export const routing = RouterModule.forRoot(routes);
