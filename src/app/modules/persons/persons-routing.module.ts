import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersoncreateComponent } from 'src/app/components/persons/personcreate/personcreate.component';
import { PersoneditComponent } from 'src/app/components/persons/personedit/personedit.component';
import { PersonsComponent } from 'src/app/components/persons/persons.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'personedit/:id', component: PersoneditComponent },
  { path: 'personcreate', component: PersoncreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
