import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProductsComponent } from './products.component';

import { ProductsService } from './products.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { products: ProductsService },
    data: {
      title: 'Products'
    }
  },
  { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(routes);
