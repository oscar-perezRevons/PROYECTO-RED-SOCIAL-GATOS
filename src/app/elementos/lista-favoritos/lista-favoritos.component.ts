import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Importa esto
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-lista-favoritos',
  standalone: true, // 👈 Esto es importante si el componente es standalone
  imports: [CommonModule], // 👈 Aquí debes incluir CommonModule
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.scss']
})
export class ListaFavoritosComponent implements OnInit {
  favourites: any[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.favouritesService.getFavourites().subscribe({
      next: (data) => this.favourites = data,
      error: (err) => console.error('Error al obtener favoritos:', err)
    });
  }
}

