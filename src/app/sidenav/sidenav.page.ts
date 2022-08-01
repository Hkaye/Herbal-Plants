import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'Home',
      link: '/nav/home',
      icon: 'home'
    },
    {
      name: 'Herbal Plant',
      link: '/nav/herbal',
      icon: 'leaf'
    },
    {
      name: 'Ailment and Prescription',
      link: '/nav/ailments',
      icon: 'medkit'
    },
    {
      name: 'Favorite',
      link: '/nav/favorite',
      icon: 'heart'
    },
  ]
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent)=> {
      this.active = event.url
    })
  }

  ngOnInit() {
  }

}
