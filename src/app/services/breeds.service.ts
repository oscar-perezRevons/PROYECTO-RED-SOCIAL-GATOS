import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private apiUrl = 'https://api.thecatapi.com/v1';
  private apiKey = 'live_WWWRRE7EESCAaGit4vgQWTcbxYcGqFrLu6DgRJcMg1jQmt7MRuPKbMuDXy3f4yMv'; // Reemplaza con tu clave real

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey,
    });

    return this.http.get(`${this.apiUrl}/breeds`, { headers });
  }
}
