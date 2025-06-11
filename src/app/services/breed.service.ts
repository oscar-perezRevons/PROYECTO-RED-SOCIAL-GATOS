import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BreedService {
    private apiUrl = `${environment.apiUrl}/api/breeds`;

    constructor(private http: HttpClient) { }

    getBreeds(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    createBreed(breed: { name_breed: string, origin_breed: string, description_breed: string }): Observable<any> {
        return this.http.post<any>(this.apiUrl, breed);
    }
}