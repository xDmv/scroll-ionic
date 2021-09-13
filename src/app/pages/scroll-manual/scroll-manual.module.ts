import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollManualPageRoutingModule } from './scroll-manual-routing.module';

import { ScrollManualPage } from './scroll-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollManualPageRoutingModule
  ],
  declarations: [ScrollManualPage]
})
export class ScrollManualPageModule {}
