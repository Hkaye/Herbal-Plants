import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteItem } from 'src/app/favorite/favorite.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {

    @Input() favoriteItem: FavoriteItem;

    @Output() clicked = new EventEmitter();

    constructor (
    ){}

}
