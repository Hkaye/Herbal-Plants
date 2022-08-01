import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AilmentsCardComponent } from "./ailments-card.component";

@NgModule({
    declarations: [AilmentsCardComponent],
    imports: [CommonModule],
    exports: [AilmentsCardComponent],
})
export class AilmentsCardModule {}