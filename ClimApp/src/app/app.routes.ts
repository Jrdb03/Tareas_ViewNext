import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },

  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.routes')
  },

  {
    path: '**',
    redirectTo: 'weather'
  }
];