import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCartCakePageRoutingModule } from './add-cart-cake-routing.module';

import { AddCartCakePage } from './add-cart-cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCartCakePageRoutingModule
  ],
  declarations: [AddCartCakePage]
})
export class AddCartCakePageModule {}
