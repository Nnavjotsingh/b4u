import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiefPage } from './chief.page';

const routes: Routes = [
  {
    path: '',
    component: ChiefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiefPageRoutingModule {}
