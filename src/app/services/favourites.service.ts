import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private apiUrl = 'https://api.thecatapi.com/v1/favourites';
  private apiKey = 'live_WWWRRE7EESCAaGit4vgQWTcbxYcGqFrLu6DgRJcMg1jQmt7MRuPKbMuDXy3f4yMv';
  private subId = 'mi_usuario_demo';
  private apiUrll = `${environment.apiUrl}/api/favourites`;

  constructor(private http: HttpClient) {}
   agregarFavorito(idUser: number, idImage: number): Observable<any> {
    return this.http.post(this.apiUrll, { id_user: idUser, id_image: idImage });
  }


  getFavourites(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get(`${this.apiUrl}?sub_id=${this.subId}`, { headers });
  }

  addFavourite(imageId: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });

    const body = {
      image_id: imageId,
      sub_id: this.subId
    };

    return this.http.post(this.apiUrl, body, { headers });
  }

  eliminarFavorito(favouriteId: number): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.delete(`${this.apiUrl}/${favouriteId}`, { headers });
  }

}

