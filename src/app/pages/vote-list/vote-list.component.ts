import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class VoteListComponent implements OnInit {
  votos: Vote[] = [];

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.voteService.getVotes().subscribe(data => {
      this.votos = data;
    });
  }
  cargarVotos(): void {
    this.voteService.getVotes().subscribe({
      next: (data) => this.votos = data,
      error: (err) => alert('Error al cargar votos: ' + err.message)
    });
  }

  eliminarVoto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este voto?')) {
      this.voteService.deleteVoto(id).subscribe({
        next: () => {
          alert('Voto eliminado correctamente.');
          this.cargarVotos();
        },
        error: (err) => alert('Error al eliminar el voto: ' + err.message)
      });
    }
  }
}