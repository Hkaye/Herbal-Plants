import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FavoriteItemComponent } from "./favorite-item.component";
import { IonicModule } from "@ionic/angular";

@NgModule ({
    declarations: [FavoriteItemComponent],
    imports: [CommonModule, IonicModule],
    exports: [FavoriteItemComponent],

})
export class FavoriteItemModule {}