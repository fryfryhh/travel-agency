import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TravelsService } from 'src/app/services/travels.service';
import { Travel } from 'src/app/models/travel.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css'],
})
export class TravelsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'idColectivo', 'lugarSalida', 'fechaSalida', 'lugarDestino', 'fechaLlegada', 'edit', 'delete'];
  dataSource: MatTableDataSource<Travel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private travelsService: TravelsService, private dialog: MatDialog ) {
    this.dataSource = new MatTableDataSource<Travel>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadTravels();
  }

  loadTravels() {
    this.travelsService.getTravels().subscribe((travels) => {
      this.dataSource.data = travels;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTravel(id: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: '¿Estás seguro de que deseas eliminar el viaje?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.travelsService.deleteTravel(id).subscribe(() => {
          this.loadTravels();
        });
      }
    });
  }
  
}
