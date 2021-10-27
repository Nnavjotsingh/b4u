import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorderDelveredPage } from './torder-delvered.page';

const routes: Routes = [
  {
    path: '',
    component: TorderDelveredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorderDelveredPageRoutingModule {}
