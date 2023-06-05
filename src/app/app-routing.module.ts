import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'customers',
  loadChildren: () =>
    import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
  path: 'orders',
  loadChildren: () =>
    import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})], //permette di caricare in background tutte le componenti non principali, pronte per essere poi utilizzate
  exports: [RouterModule]
})
export class AppRoutingModule { }
