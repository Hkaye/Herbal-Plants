import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MedInfoComponent } from "./med-info.component";

@NgModule ({
    declarations: [MedInfoComponent],
    imports: [CommonModule, IonicModule],
    exports: [MedInfoComponent],
})
export class MedInfoModule {}


