import { Injectable } from '@angular/core';
import { Breed } from '../interfaces/breed';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazaService {
  url = 'https://api.thecatapi.com/v1/breeds';
  url_raza = 'https://api.thecatapi.com/v1/breeds/search?q=';//
  constructor(private http: HttpClient) { }

  obtenerTodasLasRazas(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url)
  }
  obtenerRazaPorId(id: string): Observable<Breed> {
    return this.http.get<Breed>(this.url + '/' + id)
  }
  obtenerRazas(raza: string): Observable<Breed[]> { //
    return this.http.get<Breed[]>(this.url_raza + raza + '&attach_image=1')
  }
}
