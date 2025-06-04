import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private apiUrl = 'https://api.thecatapi.com/v1/favourites';
  private apiKey = 'live_WWWRRE7EESCAaGit4vgQWTcbxYcGqFrLu6DgRJcMg1jQmt7MRuPKbMuDXy3f4yMv';
  private subId = 'mi_usuario_demo';

  constructor(private http: HttpClient) {}

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


}

