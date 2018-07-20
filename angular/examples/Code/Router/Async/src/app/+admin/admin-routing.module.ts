import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllSavedGuardService } from './all-saved-guard.service';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage-products.component';
import { ManageUsersComponent } from './manage-users.component';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
