import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AViagemChihiroPage } from './a-viagem-chihiro.page';

const routes: Routes = [
  {
    path: '',
    component: AViagemChihiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AViagemChihiroPageRoutingModule {}
