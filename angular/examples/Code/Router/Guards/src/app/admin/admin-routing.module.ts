import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { AllSavedGuardService } from './all-saved-guard.service';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage-products.component';
import { ManageUsersComponent } from './manage-users.component';
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
      redirectTo: 'products',
      pathMatch: 'full',
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
