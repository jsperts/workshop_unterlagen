import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';

import { CanLoadGuardService } from './can_load_guard.service';

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

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
