import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrilhoPage } from './brilho.page';

const routes: Routes = [
  {
    path: '',
    component: BrilhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrilhoPageRoutingModule {}
