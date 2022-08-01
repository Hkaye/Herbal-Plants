import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Ailments } from 'src/app/ailments/ailments.model';
import { FavoriteItem } from 'src/app/favorite/favorite.model';
import { AilmentsService } from 'src/app/prescription/ailments.service';
import { FavoriteService } from 'src/app/prescription/favorites.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: string;
  ailments: Ailments;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ailmentsService: AilmentsService,
    private favoriteService: FavoriteService,
    private toastCtrl: ToastController
    ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.ailments = this.ailmentsService.getAilment(this.id);
  }

  addItemToFavorite() {
    const favoriteItem: FavoriteItem = {
      id: this.ailments.id,
      title: this.ailments.title,
      image: this.ailments.image,
      description: this.ailments.description,
      pic: this.ailments.pic,
      plant: this.ailments.plant,
      def: this.ailments.def,
      plant2: this.ailments.plant2,
      def2: this.ailments.def2,
    };

    this.favoriteService.addToFavorite(favoriteItem);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Added to favorite",
      mode: 'md',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}