import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorderDelveredPageRoutingModule } from './torder-delvered-routing.module';

import { TorderDelveredPage } from './torder-delvered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorderDelveredPageRoutingModule
  ],
  declarations: [TorderDelveredPage]
})
export class TorderDelveredPageModule {}
