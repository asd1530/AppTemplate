import { StoreComponent } from './store.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
];

export const STORE_ROUTES = RouterModule.forChild(routes);
