import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ailments } from 'src/app/ailments/ailments.model';


@Component({
  selector: 'app-ailments-card',
  templateUrl: './ailments-card.component.html',
  styleUrls: ['./ailments-card.component.scss'],
})
export class AilmentsCardComponent {

  @Input() item: Ailments;

  @Output() clicked = new EventEmitter();


  constructor (
   
  ) {}

}
