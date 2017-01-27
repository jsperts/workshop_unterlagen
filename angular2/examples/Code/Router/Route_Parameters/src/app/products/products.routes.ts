import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'prod/:id', component: ProductComponent },
];

export const routing = RouterModule.forChild(routes);