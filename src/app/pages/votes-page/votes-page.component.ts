import { Component } from '@angular/core';
import { VoteListComponent } from '../vote-list/vote-list.component';

@Component({
  selector: 'app-votes-page',
  standalone: true,
  imports: [VoteListComponent],
  template: `
    <h1>Lista de Votos</h1>
    <app-vote-list></app-vote-list>
  `,
})
export class VotesPageComponent { }