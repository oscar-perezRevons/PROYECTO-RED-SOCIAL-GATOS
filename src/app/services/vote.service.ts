import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VoteService {
      private apiUrl = `${environment.apiUrl}/api/votes`

    constructor(private http: HttpClient) { }

    getVotes(): Observable<Vote[]> {
        return this.http.get<Vote[]>(this.apiUrl);
    }

    getVotoPorSubId(subId: number): Observable<Vote[]> {
        return this.http.get<Vote[]>(`${this.apiUrl}/by-user/${subId}`);
    }

    getVotoPorId(id: number): Observable<Vote> {
        return this.http.get<Vote>(`${this.apiUrl}/${id}`);
    }

    addVoto(voto: Vote): Observable<Vote> {
        return this.http.post<Vote>(this.apiUrl, voto);
    }

    updateVoto(id: number, voto: Vote): Observable<Vote> {
        return this.http.put<Vote>(`${this.apiUrl}/${id}`, voto);
    }

    deleteVoto(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
