import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  private apiUrl = 'https://k8s-lia.unrn.edu.ar/api/api/viajes';

  constructor(private http: HttpClient) { }

  getTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.apiUrl);
  }

  getTravel(id: number): Observable<Travel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Travel>(url);
  }

  addTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(this.apiUrl, travel);
  }

  addPersonToTravel(travelId: number, personId: string): Observable<any> {
    const parsedPersonId = parseInt(personId, 10);
    const url = `${this.apiUrl}/${travelId}/addPerson/${parsedPersonId}`;
    return this.http.post(url, null);
  }
  updateTravel(id: number, travel: Travel): Observable<Travel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Travel>(url, travel);
  }

  deleteTravel(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
