import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage-products.component';
import { ManageUsersComponent } from './manage-users.component';

@NgModule({
  imports: [ CommonModule, AdminRoutingModule ],
  declarations: [
    AdminComponent,
    ManageProductsComponent,
    ManageUsersComponent
  ]
})
export class AdminModule { }
