import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AilmentsPageRoutingModule } from './ailments-routing.module';

import { AilmentsPage } from './ailments.page';
import { AilmentsCardModule } from '../prescription/ailments-card/ailments-card.module';

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FavoritePageModule } from '../favorite/favorite.module';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AilmentsPageRoutingModule,
    AilmentsCardModule,
    FavoritePageModule,
  ],
  declarations: [AilmentsPage]
})
export class AilmentsPageModule {}
