import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollManualPage } from './scroll-manual.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollManualPageRoutingModule {}
