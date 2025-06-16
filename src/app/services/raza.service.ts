import { Injectable } from '@angular/core';
import { Breed } from '../models/breed.model';//
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';//

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  private apiUrl = `${environment.apiUrl}/api/breeds`;
  
  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.apiUrl)
  }

  createBreed(breed: { name_breed: string, origin_breed: string, description_breed: string }): Observable<Breed> {
    return this.http.post<Breed>(this.apiUrl, breed);
  }

  updateBreed(id: number, breed: { name_breed: string, origin_breed: string, description_breed: string }): Observable<Breed> {
    return this.http.put<Breed>(`${this.apiUrl}/${id}`, breed);
  }

  deleteBreed(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getBreedByIdLocal(id: number): Observable<Breed | undefined> {
    return this.getBreeds().pipe(
      map(breeds => breeds.find(b => b.id_breed === id))
    );
  }

}