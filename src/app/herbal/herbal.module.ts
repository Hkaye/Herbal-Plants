import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerbalPageRoutingModule } from './herbal-routing.module';

import { HerbalPage } from './herbal.page';
import { PlantsModule } from '../plants/plants.module';

import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerbalPageRoutingModule,
    PlantsModule,
    Ng2SearchPipeModule,
    
  ],
  declarations: [HerbalPage]
})
export class HerbalPageModule {}
