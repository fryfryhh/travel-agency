import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-personedit',
  templateUrl: './personedit.component.html',
  styleUrls: ['./personedit.component.css']
})
export class PersoneditComponent implements OnInit {
  editFormGroup: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private personsService: PersonsService
  ) {
    this.editFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      id: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id === 0) {
        this.initializeForm();
      } else if (!isNaN(id)) {
        this.loadPerson(id);
      }
    });
  }

  initializeForm() {
    this.editFormGroup.setValue({
      id: 0,
      name: '',
      lastName: '',
      age: ''
    });
  }

  loadPerson(id: number) {
    this.personsService.getPerson(id).subscribe(person => {
      this.editFormGroup.patchValue(person);
    });
  }

  savePerson() {
    if (this.editFormGroup.valid) {
      const editedPerson: Person = this.editFormGroup.value;
      const id = editedPerson.id;
      
      if (id) {
        this.personsService.updatePerson(id, editedPerson).subscribe(() => {
          console.log('Persona actualizada!');
          this.router.navigate(['/persons']);
        }, error => {
          console.error('Error al actualizar la persona:', error);
        });
      }
    } else {
      this.errorMessage = 'El formulario no es válido.';
    }
  }

  cancelEdit() {
    this.router.navigate(['/persons']);
  }
}
