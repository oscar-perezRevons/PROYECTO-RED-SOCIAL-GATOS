import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../interfaces/vote';

@Injectable({
    providedIn: 'root'
})
export class VoteService {
    private apiUrl = 'https://6838b98d6561b8d882ae0cc6.mockapi.io/votes/datase_votos';

    constructor(private http: HttpClient) { }

    getVotes(): Observable<Vote[]> {
        return this.http.get<Vote[]>(this.apiUrl);
    }

    getVotoPorSubId(subId: string): Observable<Vote[]> {
        return this.http.get<Vote[]>(`${this.apiUrl}?sub_id=${subId}`);
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
