import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelsService } from 'src/app/services/travels.service';
import { Travel } from 'src/app/models/travel.model';
import { Bus } from 'src/app/models/bus.model';
import { Person } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-traveledit',
  templateUrl: './traveledit.component.html',
  styleUrls: ['./traveledit.component.css']
})
export class TravelEditComponent implements OnInit {
  travelForm: FormGroup;
  editFormGroup!: FormGroup;
  errorMessage!: string;
  persons: Person[] = [];

  constructor(
    private travelsService: TravelsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personsService: PersonsService
  ) {
    this.travelForm = this.formBuilder.group({
      personaId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.editFormGroup = this.formBuilder.group({
      lugarSalida: ['', Validators.required],
      lugarDestino: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      idColectivo: ['', Validators.required],
      personaId: ['', Validators.required],
      id: ['', Validators.required]
    });

    this.personsService.getPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      },
      (error: any) => {
        this.errorMessage = 'Error al cargar la lista de personas.';
      }
    );

    const travelId = this.activatedRoute.snapshot.params['id'];

    this.travelsService.getTravel(travelId).subscribe(
      (travel: Travel) => {
        this.editFormGroup.patchValue({
          lugarSalida: travel.lugarSalida,
          lugarDestino: travel.lugarDestino,
          fechaSalida: travel.fechaSalida,
          fechaLlegada: travel.fechaLlegada,
          idColectivo: travel.idColectivo,
          personaId: travel.personaId,
          id: travel.id
        });
      },
      (error: any) => {
        this.errorMessage = 'Error al cargar los datos del viaje.';
      }
    );
  }

  saveTravel() {
    if (this.editFormGroup.valid) {
      const travelId = this.activatedRoute.snapshot.params['id'];
      const editedTravel: Travel = {
        lugarSalida: this.editFormGroup.value.lugarSalida,
        lugarDestino: this.editFormGroup.value.lugarDestino,
        fechaSalida: this.editFormGroup.value.fechaSalida,
        fechaLlegada: this.editFormGroup.value.fechaLlegada,
        idColectivo: this.editFormGroup.value.idColectivo,
        personaId: this.editFormGroup.value.personaId,
        id: this.editFormGroup.value.id,
        colectivo: new Bus(0, '', 0, 0)
      };

      this.travelsService.updateTravel(travelId, editedTravel).subscribe(
        (updatedTravel: Travel) => {
          this.router.navigateByUrl('/travels');
        },
        (error: any) => {
          this.errorMessage = 'Error al guardar los cambios del viaje.';
        }
      );
    } else {
      this.errorMessage = 'Por favor,completa correctamente todos los campos.';
    }
  }

  cancelEdit() {
    this.router.navigateByUrl('/travels');
  }
}
