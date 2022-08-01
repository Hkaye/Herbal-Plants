import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteItem } from 'src/app/favorite/favorite.model';
import { FavoriteService } from '../favorites.service';

@Component({
  selector: 'app-fav-details',
  templateUrl: './fav-details.page.html',
  styleUrls: ['./fav-details.page.scss'],
})
export class FavDetailsPage implements OnInit {

  id: string;
  favoriteItem: FavoriteItem;

  constructor(
    private activatedRoute: ActivatedRoute, private favoriteService: FavoriteService
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.favoriteItem = this.favoriteService.getFavoriteItem(this.id);
  }
}
