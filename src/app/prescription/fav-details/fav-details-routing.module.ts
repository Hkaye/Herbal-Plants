import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavDetailsPage } from './fav-details.page';

const routes: Routes = [
  {
    path: '',
    component: FavDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavDetailsPageRoutingModule {}
