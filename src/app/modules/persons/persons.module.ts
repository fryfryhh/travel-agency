import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from 'src/app/components/persons/persons.component';
import { PersoneditComponent } from 'src/app/components/persons/personedit/personedit.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { PersonsService } from 'src/app/services/persons.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PersonsRoutingModule } from './persons-routing.module';
import { PersoncreateComponent } from 'src/app/components/persons/personcreate/personcreate.component';


@NgModule({
  declarations: [
    PersoneditComponent,
    PersonsComponent,
    PersoncreateComponent,
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatDatepickerModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    








  ],
  providers: [
    PersonsService

  ]
})
export class PersonsModule { }
