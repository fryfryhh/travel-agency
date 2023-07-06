import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusesService } from 'src/app/services/buses.service';
import { Bus } from 'src/app/models/bus.model';

@Component({
  selector: 'app-busedit',
  templateUrl: './busedit.component.html',
  styleUrls: ['./busedit.component.css']
})
export class BuseditComponent implements OnInit {
  editFormGroup: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private busesService: BusesService
  ) {
    this.editFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      patente: ['', Validators.required],
      cantidadAsientos: ['', Validators.required],
      modeloId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.loadBus(id);
      }
    });
  }

  loadBus(id: number) {
    this.busesService.getBusById(id).subscribe(bus => {
      this.editFormGroup.patchValue(bus);
    });
  }

  saveBus() {
    if (this.editFormGroup.valid) {
      const editedBus: Bus = this.editFormGroup.value;
      const id = editedBus.id;
      
      if (id) {
        // actualizar colectivo
        this.busesService.updateBus(id, editedBus).subscribe(() => {
          console.log('Colectivo actualizado!');
          this.router.navigate(['/buses']);
        }, error => {
          console.error('Error al actualizar el colectivo:', error);
        });
      } else {
        // crear colectivo
        this.busesService.createBus(editedBus).subscribe(() => {
          console.log('Colectivo agregado!');
          this.router.navigate(['/buses']);
        }, error => {
          console.error('Error al agregar el colectivo:', error);
        });
      }
    } else {
      this.errorMessage = 'El formulario no es válido.';
    }
  }

  cancelEdit() {
    this.router.navigate(['/buses']);
  }
}
