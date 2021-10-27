import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorderViewPageRoutingModule } from './torder-view-routing.module';

import { TorderViewPage } from './torder-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorderViewPageRoutingModule
  ],
  declarations: [TorderViewPage]
})
export class TorderViewPageModule {}
