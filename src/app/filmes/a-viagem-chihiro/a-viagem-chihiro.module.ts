import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AViagemChihiroPageRoutingModule } from './a-viagem-chihiro-routing.module';

import { AViagemChihiroPage } from './a-viagem-chihiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AViagemChihiroPageRoutingModule
  ],
  declarations: [AViagemChihiroPage]
})
export class AViagemChihiroPageModule {}
