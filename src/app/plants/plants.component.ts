import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Herbal } from 'src/app/herbal/herbal.model';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent {

  @Input() item: Herbal;

  @Output() clicked = new EventEmitter();


}
