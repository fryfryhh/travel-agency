import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelCreateComponent } from 'src/app/components/travels/travelcreate/travelcreate.component';
import { TravelEditComponent } from 'src/app/components/travels/traveledit/traveledit.component';
import { TravelsComponent } from 'src/app/components/travels/travels.component';

const routes: Routes = [
  { path: '', component: TravelsComponent },
  { path: 'traveledit/:id', component: TravelEditComponent },
  { path: 'travelcreate', component: TravelCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelsRoutingModule { }
