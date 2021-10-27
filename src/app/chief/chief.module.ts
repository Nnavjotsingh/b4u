import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChiefPageRoutingModule } from './chief-routing.module';

import { ChiefPage } from './chief.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChiefPageRoutingModule
  ],
  declarations: [ChiefPage]
})
export class ChiefPageModule {}
