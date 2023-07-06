import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  private apiUrl = 'https://k8s-lia.unrn.edu.ar/api/api/colectivos';

  constructor(private http: HttpClient) { }

  getBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.apiUrl);
  }


  getBusById(id: number): Observable<Bus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Bus>(url);
  }

  createBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(this.apiUrl, bus);
  }

  updateBus(id: number, bus: Bus): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, bus);
  }

  deleteBus(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
