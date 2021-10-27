import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddChiefPageRoutingModule } from './add-chief-routing.module';

import { AddChiefPage } from './add-chief.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddChiefPageRoutingModule
  ],
  declarations: [AddChiefPage]
})
export class AddChiefPageModule {}
