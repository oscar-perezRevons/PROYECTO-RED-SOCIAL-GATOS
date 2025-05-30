import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(private http: HttpClient) { }
  obtenerTodasLasImagenes(): Observable<image[]> {
    return this.http.get<image[]>('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=30&api_key=live_WtsFWeZr9v74GB0bugCPGXOIHdFsdrRrpS7LfbpzQo88L0SBAxSGryUb1obFzPPK')
  }
  obtenerImagenPorId(id: string): Observable<image> {
    return this.http.get<image>('https://api.thecatapi.com/v1/images/' + id)
  }
  obtenerTodasMisImagenes():Observable<image[]>{
    const headers = new HttpHeaders({
      'x-api-key': 'live_WtsFWeZr9v74GB0bugCPGXOIHdFsdrRrpS7LfbpzQo88L0SBAxSGryUb1obFzPPK' 
    });
    return this.http.get<image[]>('https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC',{headers})
  }
  postearNuevaImagen(formData: FormData): Observable<any> {
    
    const headers = new HttpHeaders({
      'x-api-key': 'live_WtsFWeZr9v74GB0bugCPGXOIHdFsdrRrpS7LfbpzQo88L0SBAxSGryUb1obFzPPK' 
    });

    return this.http.post('https://api.thecatapi.com/v1/images/upload', formData, { headers });
  }
  // postearNuevaImagen(url:string,body){

  // }
}
