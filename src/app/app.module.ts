import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PersonsModule } from './modules/persons/persons.module';
import { TravelsModule } from './modules/travels/travels.module';
import { BusesModule } from './modules/buses/buses.module';
import { TravelsRoutingModule } from './modules/travels/travels-routing.module';
import { PersonsRoutingModule } from './modules/persons/persons-routing.module';
import { BusesRoutingModule } from './modules/buses/buses-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './control-panel/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    TabsComponent,
    ConfirmComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    MatDialogModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    NgIf,
    MatToolbarModule,
    PersonsModule,
    TravelsModule,
    BusesModule,
    TravelsRoutingModule,
    PersonsRoutingModule,
    BusesRoutingModule,
    MatSnackBarModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
