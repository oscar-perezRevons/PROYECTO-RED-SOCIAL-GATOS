import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GatoService } from '../../services/gato.service';
import { VoteService } from '../../services/vote.service';
import { RazaService } from '../../services/raza.service';
import { FavouritesService } from '../../services/favourites.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stats = {
    totalImages: 0,
    totalBreeds: 0,
    totalVotes: 0,
    totalFavorites: 0,
    averageVote: 0,
    loading: true
  };

  constructor(
    private gatoService: GatoService,
    private voteService: VoteService,
    private razaService: RazaService,
    private favouritesService: FavouritesService
  ) { }

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.stats.loading = true;

    forkJoin({
      images: this.gatoService.getAllTheImages(),
      breeds: this.razaService.getBreeds(),
      votes: this.voteService.getVotes(),
      favorites: this.favouritesService.getFavourites(1)
    }).subscribe({
      next: (data) => {
        this.stats.totalImages = data.images.length;
        this.stats.totalBreeds = data.breeds.length;
        this.stats.totalVotes = data.votes.length;
        this.stats.totalFavorites = data.favorites.length || 0;
        
        // Calculate average vote
        if (data.votes.length > 0) {
          const sum = data.votes.reduce((acc, vote) => acc + vote.value_vote, 0);
          this.stats.averageVote = sum / data.votes.length;
        }
        
        this.stats.loading = false;
      },
      error: (err) => {
        console.error('Error loading statistics:', err);
        this.stats.loading = false;
      }
    });
  }
}
