import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrilhoPageRoutingModule } from './brilho-routing.module';

import { BrilhoPage } from './brilho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrilhoPageRoutingModule
  ],
  declarations: [BrilhoPage]
})
export class BrilhoPageModule {}
