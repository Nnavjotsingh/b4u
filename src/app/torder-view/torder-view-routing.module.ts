import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorderViewPage } from './torder-view.page';

const routes: Routes = [
  {
    path: '',
    component: TorderViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorderViewPageRoutingModule {}
