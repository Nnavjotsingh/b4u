import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCartCakePage } from './add-cart-cake.page';

const routes: Routes = [
  {
    path: '',
    component: AddCartCakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCartCakePageRoutingModule {}
