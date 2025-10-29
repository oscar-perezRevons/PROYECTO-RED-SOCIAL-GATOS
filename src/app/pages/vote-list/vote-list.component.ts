import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss'],
  imports: [CommonModule, RouterLink, FormsModule]
})
export class VoteListComponent implements OnInit {
  votos: Vote[] = [];
  votosFiltrados: Vote[] = [];
  sortBy: string = 'none';
  filterByRating: string = 'all';
  isLoading: boolean = false;

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.cargarVotos();
  }

  cargarVotos(): void {
    this.isLoading = true;
    this.voteService.getVotes().subscribe({
      next: (data) => {
        this.votos = data;
        this.votosFiltrados = data;
        this.isLoading = false;
      },
      error: (err) => {
        alert('Error al cargar votos: ' + err.message);
        this.isLoading = false;
      }
    });
  }

  eliminarVoto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este voto?')) {
      this.voteService.deleteVoto(id).subscribe({
        next: () => {
          alert('Voto eliminado correctamente.');
          this.votos = this.votos.filter(v => v.id_vote !== id);
          this.aplicarFiltros();
        },
        error: (err) => alert('Error al eliminar el voto: ' + err.message)
      });
    }
  }

  aplicarFiltros(): void {
    let resultado = [...this.votos];

    // Filtrar por rating
    if (this.filterByRating !== 'all') {
      const rating = parseInt(this.filterByRating);
      resultado = resultado.filter(v => v.value_vote === rating);
    }

    // Ordenar
    if (this.sortBy === 'rating-asc') {
      resultado.sort((a, b) => a.value_vote - b.value_vote);
    } else if (this.sortBy === 'rating-desc') {
      resultado.sort((a, b) => b.value_vote - a.value_vote);
    } else if (this.sortBy === 'id-asc') {
      resultado.sort((a, b) => (a.id_vote || 0) - (b.id_vote || 0));
    } else if (this.sortBy === 'id-desc') {
      resultado.sort((a, b) => (b.id_vote || 0) - (a.id_vote || 0));
    }

    this.votosFiltrados = resultado;
  }

  limpiarFiltros(): void {
    this.sortBy = 'none';
    this.filterByRating = 'all';
    this.votosFiltrados = [...this.votos];
  }
}