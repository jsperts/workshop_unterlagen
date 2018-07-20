import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AuthGuardService } from './auth-guard.service';
import { AllSavedGuardService } from './all_saved_guard.service';
import { AuthService } from './auth.service';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage_products.component';
import { ManageUsersComponent } from './manage_users.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [ CommonModule, AdminRoutingModule ],
  declarations: [
    AdminComponent,
    ManageProductsComponent,
    ManageUsersComponent,
    LoginComponent
  ],
  providers: [ AuthGuardService, AllSavedGuardService, AuthService ]
})
export class AdminModule { }
