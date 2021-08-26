import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ANoivaPage } from './a-noiva.page';

const routes: Routes = [
  {
    path: '',
    component: ANoivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ANoivaPageRoutingModule {}
