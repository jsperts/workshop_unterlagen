import { RouterModule, Routes } from '@angular/router';

import { AllSavedGuardService } from './all_saved_guard.service';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage_products.component';
import { ManageUsersComponent } from './manage_users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{
      path: 'products',
      component: ManageProductsComponent,
      canDeactivate: [ AllSavedGuardService ],
    }, {
      path: 'users',
      component: ManageUsersComponent,
      canDeactivate: [ AllSavedGuardService ],
    }, {
      path: '',
      redirectTo: 'products'
    }]
  }
];

export const routing = RouterModule.forChild(routes);
