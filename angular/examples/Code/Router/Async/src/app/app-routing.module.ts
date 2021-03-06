import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, ExtraOptions } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';

import { CanLoadGuardService } from './can-load-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    loadChildren: './dist/app/+admin/admin.module#AdminModule',
    canLoad: [ CanLoadGuardService ]
  },
  { path: 'login', component: LoginComponent, }
];

const routingOptions: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
