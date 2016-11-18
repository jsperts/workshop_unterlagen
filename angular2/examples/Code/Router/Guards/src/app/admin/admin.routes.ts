import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth_guard.service';
import { AllSavedGuardService } from './all_saved_guard.service';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage_products.component';
import { ManageUsersComponent } from './manage_users.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [ AuthGuardService ],
    canActivateChild: [ AuthGuardService ],
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
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

export const routing = RouterModule.forChild(routes);
