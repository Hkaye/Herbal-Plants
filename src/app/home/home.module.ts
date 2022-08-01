import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MedInfoComponent } from '../components/med-info/med-info.component';
import { MedInfoModule } from '../components/med-info/med-info.module';
import { SlideImageModule } from '../components/slide-image/slide-image.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MedInfoModule,
    SlideImageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
