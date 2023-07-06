import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesRoutingModule } from './buses-routing.module';
import { BusesService } from 'src/app/services/buses.service';
import { BusesComponent } from 'src/app/components/buses/buses.component';
import { BuseditComponent } from 'src/app/components/buses/busedit/busedit.component';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BuscreateComponent } from 'src/app/components/buses/buscreate/buscreate.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
     BusesComponent,
     BuseditComponent,
     BuscreateComponent,
    ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatAutocompleteModule,
    BusesRoutingModule,
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
    MatSnackBarModule,
  ],
  providers: [
    BusesService
  ]
})
export class BusesModule { }
