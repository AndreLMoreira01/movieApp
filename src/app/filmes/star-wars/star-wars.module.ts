import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarWarsPageRoutingModule } from './star-wars-routing.module';

import { StarWarsPage } from './star-wars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarWarsPageRoutingModule
  ],
  declarations: [StarWarsPage]
})
export class StarWarsPageModule {}
