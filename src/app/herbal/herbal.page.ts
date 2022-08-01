import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from '../plants/plants.service';
import { Herbal } from './herbal.model';

@Component({
  selector: 'app-herbal',
  templateUrl: './herbal.page.html',
  styleUrls: ['./herbal.page.scss'],
})
export class HerbalPage implements OnInit {
  herbal: Herbal[] = [];

  constructor(private PlantsService: PlantService, private router: Router) { }

  ngOnInit() {
    this.herbal = this.PlantsService.getHerbal();
  }

  goToInfoPage(plant: string) {
    this.router.navigate(['info', plant]);
  }
}
