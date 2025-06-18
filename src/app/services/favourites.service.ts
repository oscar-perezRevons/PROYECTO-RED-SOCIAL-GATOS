import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Favourite } from '../models/favourite';


@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private apiUrl = 'https://api.thecatapi.com/v1/favourites';
  private apiKey = 'live_WWWRRE7EESCAaGit4vgQWTcbxYcGqFrLu6DgRJcMg1jQmt7MRuPKbMuDXy3f4yMv';
  private subId = 'mi_usuario_demo';
  private apiUrll = `${environment.apiUrl}/api/favourites`;

  constructor(private http: HttpClient) { }
  agregarFavorito(idUser: number, idImage: number): Observable<any> {
    return this.http.post(this.apiUrll, { id_user: idUser, id_image: idImage });
  }
  getFavourites(id_user: number): Observable<any> {
    return this.http.get(`${this.apiUrll}/${id_user}`);
  }
  


  addFavourite(imageId: string): Observable<any> {
    const body = {
      image_id: imageId,
      id_user: 1
    };

    return this.http.post(this.apiUrll, body);
  }

  eliminarFavorito(favouriteId: number): Observable<any> {
    return this.http.delete(`${this.apiUrll}/${favouriteId}`);
  }

}
