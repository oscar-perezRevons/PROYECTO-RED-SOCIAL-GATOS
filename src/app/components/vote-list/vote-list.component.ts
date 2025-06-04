import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../interfaces/vote.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss'],
  imports: [CommonModule]
})
export class VoteListComponent implements OnInit {
  votes: Vote[] = [];
  loading = true;
  error = '';

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.voteService.getVotes().subscribe({
      next: (data) => {
        this.votes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar votos';
        this.loading = false;
      }
    });
  }
}