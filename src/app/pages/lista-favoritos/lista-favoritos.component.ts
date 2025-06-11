import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-lista-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.scss']
})
export class ListaFavoritosComponent implements OnInit {
  favourites: any[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.cargarFavoritos();
  }

  cargarFavoritos(): void {
    this.favouritesService.getFavourites().subscribe({
      next: (data) => this.favourites = data,
      error: (err) => console.error('Error al obtener favoritos:', err)
    });
  }

  eliminarFavorito(favId: number): void {
    this.favouritesService.eliminarFavorito(favId).subscribe({
      next: () => {
        this.favourites = this.favourites.filter(fav => fav.id !== favId);
      },
      error: (err) => {
        console.error('Error al eliminar favorito:', err);
        alert('No se pudo eliminar el favorito.');
      }
    });
  }
}


