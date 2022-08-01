import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'herbal',
        loadChildren: () => import('../herbal/herbal.module').then( m => m.HerbalPageModule)
      },
      {
        path: 'ailments',
        loadChildren: () => import('../ailments/ailments.module').then( m => m.AilmentsPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../favorite/favorite.module').then( m => m.FavoritePageModule)
      },
      /*
      {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full'
      } */
    ]
  },

  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule {}
