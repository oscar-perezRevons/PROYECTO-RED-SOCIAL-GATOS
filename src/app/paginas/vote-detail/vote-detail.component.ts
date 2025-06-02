import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../interfaces/vote.interface';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.scss']
})
export class VoteDetailComponent implements OnInit {
  vote?: Vote;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voteService.getVoteById(id).subscribe({
        next: (data) => this.vote = data,
        error: () => this.error = 'No se pudo cargar el voto.'
      });
    } else {
      this.error = 'ID no válido';
    }
  }
}