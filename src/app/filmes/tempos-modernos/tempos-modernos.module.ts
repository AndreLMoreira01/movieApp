import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemposModernosPageRoutingModule } from './tempos-modernos-routing.module';

import { TemposModernosPage } from './tempos-modernos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemposModernosPageRoutingModule
  ],
  declarations: [TemposModernosPage]
})
export class TemposModernosPageModule {}
