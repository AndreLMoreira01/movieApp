import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ANoivaPageRoutingModule } from './a-noiva-routing.module';

import { ANoivaPage } from './a-noiva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ANoivaPageRoutingModule
  ],
  declarations: [ANoivaPage]
})
export class ANoivaPageModule {}
