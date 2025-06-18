import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Favourite } from '../models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private apiUrl = `${environment.apiUrl}/api/favourites`; 
  private id_user = '1';

  constructor(private http: HttpClient) {}
  getFavourites(id_user: number): Observable<Favourite[]> {
    return this.http.get<Favourite[]>(`${this.apiUrl}/${id_user}`);
  }

  addFavourite(imageId: string): Observable<any> {
       const body = {
      image_id: imageId,
      id_user: this.id_user
    };

    return this.http.post(this.apiUrl, body);
  }

  eliminarFavorito(favouriteId: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${favouriteId}`);
  }

}

