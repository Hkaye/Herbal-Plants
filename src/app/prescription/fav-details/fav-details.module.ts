import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavDetailsPageRoutingModule } from './fav-details-routing.module';

import { FavDetailsPage } from './fav-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavDetailsPageRoutingModule
  ],
  declarations: [FavDetailsPage]
})
export class FavDetailsPageModule {}
