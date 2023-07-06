import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'buses',
   loadChildren: () => import('./modules/buses/buses.module').then((m) => m.BusesModule) },

  { path: 'travels',
   loadChildren: () => import('./modules/travels/travels.module').then((m) => m.TravelsModule) },

  { path: 'persons',
   loadChildren: () => import('./modules/persons/persons.module').then((m) => m.PersonsModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: true,
    }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
