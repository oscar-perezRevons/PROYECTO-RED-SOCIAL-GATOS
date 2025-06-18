import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesService } from '../../services/favourites.service';
import { Favourite } from '../../models/favourite';

@Component({
  selector: 'app-lista-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.scss']
})
export class ListaFavoritosComponent implements OnInit {
  favourites: Favourite[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    const id_user = 1; 
    this.favouritesService.getFavourites(id_user).subscribe(
      (data) => this.favourites = data,
      (error) => console.error('Error al obtener favoritos', error)
    );
  }

  

  
  eliminarFavorito(favId: number): void {
    this.favouritesService.eliminarFavorito(favId).subscribe({
      next: () => {
        this.favourites = this.favourites.filter(fav => fav.id_favourite !== favId);
      },
      error: (err) => {
        console.error('Error al eliminar favorito:', err);
        alert('No se pudo eliminar el favorito.');
      }
    });
  }
}


