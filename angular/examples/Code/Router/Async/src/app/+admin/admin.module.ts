import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule } from './admin-routing.module';

import { AllSavedGuardService } from './all_saved_guard.service';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage_products.component';
import { ManageUsersComponent } from './manage_users.component';

@NgModule({
  imports: [ CommonModule, AdminRoutingModule ],
  declarations: [
    AdminComponent,
    ManageProductsComponent,
    ManageUsersComponent
  ],
  providers: [ AllSavedGuardService ]
})
export class AdminModule { }
