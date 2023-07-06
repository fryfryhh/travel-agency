import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelsComponent } from 'src/app/components/travels/travels.component';
import { TravelEditComponent } from 'src/app/components/travels/traveledit/traveledit.component';
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
import { TravelsService } from 'src/app/services/travels.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TravelsRoutingModule } from './travels-routing.module';
import { TravelCreateComponent } from 'src/app/components/travels/travelcreate/travelcreate.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    TravelsComponent,
    TravelEditComponent,
    TravelCreateComponent,
  ],
  imports: [
    CommonModule,
    TravelsRoutingModule,
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
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule,

  ],
  providers: [
    TravelsService
  ]
})
export class TravelsModule { }
