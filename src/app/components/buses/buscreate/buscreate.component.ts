import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusesService } from 'src/app/services/buses.service';
import { Bus } from 'src/app/models/bus.model';

@Component({
  selector: 'app-buscreate',
  templateUrl: './buscreate.component.html',
  styleUrls: ['./buscreate.component.css']
})
export class BuscreateComponent implements OnInit {
  createFormGroup: FormGroup;
  errorMessage!: string;
  modeloOptions: number[] = [1, 2, 3];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private busesService: BusesService
  ) {
    this.createFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      patente: ['', Validators.required],
      cantidadAsientos: ['', Validators.required],
      modeloId: ['', Validators.required]
    });
  }

  ngOnInit() {}

  saveBus() {
    if (this.createFormGroup.valid) {
      const newBus: Bus = this.createFormGroup.value;
      
      this.busesService.createBus(newBus).subscribe(() => {
        console.log('Colectivo agregado!');
        this.router.navigate(['/buses']);
      }, error => {
        console.error('Error al agregar el colectivo:', error);
      });
    } else {
      this.errorMessage = 'El formulario no es válido.';
    }
  }

  cancelEdit() {
    this.router.navigate(['/buses']);
  }
}
