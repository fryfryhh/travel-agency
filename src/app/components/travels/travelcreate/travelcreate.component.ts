import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelsService } from 'src/app/services/travels.service';
import { Travel } from 'src/app/models/travel.model';
import { Bus } from 'src/app/models/bus.model';
import { Person } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';
import { BusesService } from 'src/app/services/buses.service';

@Component({
  selector: 'app-travelcreate',
  templateUrl: './travelcreate.component.html',
  styleUrls: ['./travelcreate.component.css']
})
export class TravelCreateComponent implements OnInit {
  createFormGroup: FormGroup;
  errorMessage!: string;
  colectivos!: Bus[];
  persons!: Person[];

  constructor(
    private formBuilder: FormBuilder,
    private travelsService: TravelsService,
    private router: Router,
    private personsService: PersonsService,
    private busesService: BusesService,
  ) {
    this.createFormGroup = this.formBuilder.group({
      lugarSalida: [''],
      lugarDestino: [''],
      fechaSalida: [''],
      fechaLlegada: [''],
      idColectivo: [''],
      personaId: [''],
      id: ['']
    });
  }

  ngOnInit() {
    this.getBuses();
    this.getPersons();
  }

  getBuses() {
    this.busesService.getBuses().subscribe(
      (colectivos: Bus[]) => {
        this.colectivos = colectivos;
      },
      (error: any) => {
        this.errorMessage = 'Error al obtener los colectivos.';
      }
    );
  }

  getPersons() {
    this.personsService.getPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      },
      (error: any) => {
        this.errorMessage = 'Error al obtener las personas.';
      }
    );
  }

  saveTravel() {
    if (this.createFormGroup.valid) {
      const newTravel: Travel = {
        lugarSalida: this.createFormGroup.value.lugarSalida,
        lugarDestino: this.createFormGroup.value.lugarDestino,
        fechaSalida: this.createFormGroup.value.fechaSalida,
        fechaLlegada: this.createFormGroup.value.fechaLlegada,
        idColectivo: this.createFormGroup.value.idColectivo,
        personaId: this.createFormGroup.value.personaId || null,
        id: this.createFormGroup.value.id,
        colectivo: this.getSelectedColectivo()
      };

      this.travelsService.addTravel(newTravel).subscribe(
        (createdTravel: Travel) => {
          console.log('Viaje creado!');
          this.router.navigateByUrl('/travels');
        },
        (error: any) => {
          this.errorMessage = 'Error al crear el viaje.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa correctamente todos los campos.';
    }
  }

  cancelCreate() {
    this.router.navigateByUrl('/travels');
  }

  getSelectedColectivo(): Bus {
   const colectivoId = this.createFormGroup.value.idColectivo;
    return this.colectivos.find(colectivo => colectivo.id === colectivoId) || new Bus(0, '', 0, 0);
  }
}
