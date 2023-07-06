import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from 'src/app/models/person.model';
import { Router } from '@angular/router';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'age', 'edit', 'delete'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private personsService: PersonsService,
    private router: Router,
    private dialog: MatDialog
    ) {
    this.dataSource = new MatTableDataSource<Person>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadPersons();
  }

  loadPersons() {
    this.personsService.getPersons().subscribe((persons) => {
      console.log(persons);
      this.dataSource.data = persons;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePerson(id: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: '¿Estás seguro de que deseas eliminar la persona?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.deletePerson(id).subscribe(() => {
          this.loadPersons();
        });
      }
    });
  }


}
