import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BusesService } from 'src/app/services/buses.service';
import { Bus } from 'src/app/models/bus.model';
import { ModeloService } from 'src/app/services/modelo.service';
import { Model } from 'src/app/models/model.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css'],
})
export class BusesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'patente', 'cantidadAsientos', 'modelo', 'edit', 'delete'];
  dataSource: MatTableDataSource<Bus>;
  modelos: Model[] = [];
  viajes: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private busesService: BusesService,
    private modeloService: ModeloService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private travelService: TravelsService,
  ) {
    this.dataSource = new MatTableDataSource<Bus>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
    this.loadBuses();
    this.loadModelos();
    console.log(this.modelos);
    this.loadViajes();
  }

  loadViajes() {
    this.travelService.getTravels().subscribe((viajes) => {
      this.viajes = viajes;
    });
  }

  loadBuses() {
    this.busesService.getBuses().subscribe((buses) => {
      this.dataSource.data = buses;
    });
  }

  loadModelos() {
    this.modeloService.getAll().subscribe((modelos) => {
      this.modelos = modelos;
    });
  }

  getModelo(modeloId: number): string {
    console.log(modeloId);
    const model = this.modelos.find((m) => m.id === modeloId);
    return model ? `${model.marca}`: '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteBus(id: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: '¿Estás seguro de que deseas eliminar el colectivo?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const isAssigned = this.verificarBusViaje(id);
        if (isAssigned) {
          this.snackBar.open('Error: Verifique que el colectivo no esté asignado a ningún viaje', 'Cerrar', {
            duration: 5000
          });
        } else {
          this.busesService.deleteBus(id).subscribe(() => {
            this.loadBuses();
          });
        }
      }
    });
  }

  verificarBusViaje(busId: number): boolean {
    for (const viaje of this.viajes) {
      if (viaje.idColectivo === busId) {
        return true; // hay asignacion
      }
    }
    return false; // no hay asignacion
  }
  
}
