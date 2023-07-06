import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesComponent } from 'src/app/components/buses/buses.component';
import { BuseditComponent } from 'src/app/components/buses/busedit/busedit.component';
import { BuscreateComponent } from 'src/app/components/buses/buscreate/buscreate.component';

const routes: Routes = [
  { path: '', component: BusesComponent },
  { path: 'busedit/:id', component: BuseditComponent },
  { path: 'buscreate', component: BuscreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesRoutingModule { }
