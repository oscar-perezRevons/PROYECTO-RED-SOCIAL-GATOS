import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class GatoService {
  

  constructor(private http:HttpClient) { }
  obtenerTodasLasImagenes():Observable<image[]>
  {
    return this.http.get<image[]>('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20')
  }
  obtenerImagenPorId(id:string):Observable<image>{
    return this.http.get<image>('https://api.thecatapi.com/v1/images/BkIEhN3pG/'+id)

  }
}
