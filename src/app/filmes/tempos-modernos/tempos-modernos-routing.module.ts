import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemposModernosPage } from './tempos-modernos.page';

const routes: Routes = [
  {
    path: '',
    component: TemposModernosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemposModernosPageRoutingModule {}
