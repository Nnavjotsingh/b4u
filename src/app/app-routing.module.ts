import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then(m => m.ItemPageModule)
  },
  {
    path: 'chief',
    loadChildren: () => import('./chief/chief.module').then(m => m.ChiefPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemPageModule)
  },
  {
    path: 'add-chief',
    loadChildren: () => import('./add-chief/add-chief.module').then(m => m.AddChiefPageModule)
  },
  {
    path: 'add-cart-cake',
    loadChildren: () => import('./add-cart-cake/add-cart-cake.module').then( m => m.AddCartCakePageModule)
  },
  {
    path: 'add-cart-item',
    loadChildren: () => import('./add-cart-item/add-cart-item.module').then( m => m.AddCartItemPageModule)
  },
  {
    path: 'all-order',
    loadChildren: () => import('./all-order/all-order.module').then( m => m.AllOrderPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'orderupdate',
    loadChildren: () => import('./orderupdate/orderupdate.module').then( m => m.OrderupdatePageModule)
  },
  {
    path: 'torder-view',
    loadChildren: () => import('./torder-view/torder-view.module').then( m => m.TorderViewPageModule)
  },
  {
    path: 'torder-delvered',
    loadChildren: () => import('./torder-delvered/torder-delvered.module').then( m => m.TorderDelveredPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
