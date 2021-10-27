import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCartItemPageRoutingModule } from './add-cart-item-routing.module';

import { AddCartItemPage } from './add-cart-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCartItemPageRoutingModule
  ],
  declarations: [AddCartItemPage]
})
export class AddCartItemPageModule {}
