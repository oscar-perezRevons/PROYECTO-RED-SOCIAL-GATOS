import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Breed, image } from '../models/image.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatoService {
  private apiUrl = `${environment.apiUrl}/api/images`;
  constructor(private http: HttpClient) { }
  getAllTheImages(): Observable<image[]> {
    return this.http.get<image[]>(this.apiUrl)
  }
  deleteImage(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  async subirImagen(file: File): Promise<string | null> {
    const formData = new FormData();
    formData.append('file', file);


    try {
      const response = await fetch('https://postimages.org/json', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.url; // Retorna la URL de la imagen subida
    } catch (error) {
      console.error('Error al subir imagen:', error);
      return null;
    }
  }

  enviarDatosBackend(url_image: string, breed: number) {
    return this.http.post(this.apiUrl, { url_image, breed });
  }
}

