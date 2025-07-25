import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('../app/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../app/shop/pages/shop/shop.component').then(m => m.ShopComponent)
    },
    // cart 
      {
    path: 'cart',
    loadComponent: () => import('../app/shop/pages/cart/cart.component').then(m => m.CartComponent)
  },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }