import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../interfaces/vote.interface';

@Injectable({
    providedIn: 'root'
})
export class VoteService {
    private apiUrl = 'https://6838b98d6561b8d882ae0cc6.mockapi.io/votes/datase_votos';

    constructor(private http: HttpClient) { }

    getVotes(): Observable<Vote[]> {
        return this.http.get<Vote[]>(this.apiUrl);
    }

    getVoteById(id: number | string): Observable<Vote> {
        return this.http.get<Vote>(`${this.apiUrl}/${id}`);
    }
}