import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarWarsPage } from './star-wars.page';

const routes: Routes = [
  {
    path: '',
    component: StarWarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsPageRoutingModule {}
