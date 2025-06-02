import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class GatoService {
  x_api_key: string='live_WtsFWeZr9v74GB0bugCPGXOIHdFsdrRrpS7LfbpzQo88L0SBAxSGryUb1obFzPPK' ;
  constructor(private http: HttpClient) { }
  obtenerTodasLasImagenes(): Observable<image[]> {
    return this.http.get<image[]>('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=30&api_key=live_WtsFWeZr9v74GB0bugCPGXOIHdFsdrRrpS7LfbpzQo88L0SBAxSGryUb1obFzPPK')
  }
  obtenerImagenPorId(id: string): Observable<image> {
    return this.http.get<image>('https://api.thecatapi.com/v1/images/' + id)
  }
  obtenerTodasMisImagenes():Observable<image[]>{
    const headers = new HttpHeaders({
      'x-api-key': this.x_api_key
    });
    return this.http.get<image[]>('https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC',{headers})
  }
  postearNuevaImagen(formData: FormData): Observable<any> {
    
    const headers = new HttpHeaders({
      'x-api-key': this.x_api_key
    });

    return this.http.post('https://api.thecatapi.com/v1/images/upload', formData, { headers });
  }
  borrarImagenPorId(id:string){
    const headers = new HttpHeaders({
      'x-api-key': this.x_api_key
    });
    return  this.http.delete('https://api.thecatapi.com/v1/images/'+id,{headers});
  }
}
