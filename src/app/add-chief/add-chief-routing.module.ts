import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChiefPage } from './add-chief.page';

const routes: Routes = [
  {
    path: '',
    component: AddChiefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChiefPageRoutingModule {}
