import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FavoriteService } from '../prescription/favorites.service';
import { FavoriteItem } from './favorite.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  favoriteItem$: Observable<FavoriteItem[]>;

  favoriteItem: FavoriteItem[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.favoriteItem$ = this.favoriteService.getFavorite();
    this.favoriteItem = this.favoriteService.getFavorites();
  }

  async removeFromFavorite(favoriteItem: FavoriteItem){
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Remove from favorite?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.favoriteService.removeFavorite(favoriteItem.id),
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }

  goToFavDetailPage(id: string) {
    this.router.navigate(['fav-details', id]);
  }

}
