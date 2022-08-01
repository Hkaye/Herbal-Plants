import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerbalPage } from './herbal.page';

const routes: Routes = [
  {
    path: '',
    component: HerbalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerbalPageRoutingModule {}
