import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentsService } from '../prescription/ailments.service';
import {Ailments} from './ailments.model';

@Component({
  selector: 'app-ailments',
  templateUrl: './ailments.page.html',
  styleUrls: ['./ailments.page.scss'],
})
export class AilmentsPage implements OnInit {
  ailments: Ailments[] = [];
  
  constructor(
    private ailmentsService: AilmentsService, 
    private router: Router,
    ) { }

  ngOnInit() {
    this.ailments = this.ailmentsService.getAilments();
  }

  goToDetailPage(id: string) {
    this.router.navigate(['detail', id]);
  }

}
