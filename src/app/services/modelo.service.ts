import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Model } from '../models/model.model';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  private apiUrl = 'https://k8s-lia.unrn.edu.ar/api/api/modelos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<Model> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Model>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error(error);
    return throwError('hubo un error obteniendo el modelo');
  }
}
