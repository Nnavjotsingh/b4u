import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCartItemPage } from './add-cart-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddCartItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCartItemPageRoutingModule {}
