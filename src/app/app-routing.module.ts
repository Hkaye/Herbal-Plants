import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./sidenav/sidenav.module').then( m => m.SidenavPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./ailmentsPages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'info/:plant',
    loadChildren: () => import('./plants/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'fav-details/:id',
    loadChildren: () => import('./prescription/fav-details/fav-details.module').then( m => m.FavDetailsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
