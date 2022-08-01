import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Herbal } from 'src/app/herbal/herbal.model';
import { PlantService } from 'src/app/plants/plants.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  plant: string;
  herbal: Herbal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PlantsService: PlantService,
    ) { 
    this.plant = this.activatedRoute.snapshot.paramMap.get('plant');
  }

  ngOnInit() {
    this.herbal = this.PlantsService.getHerbals(this.plant);
  }

}