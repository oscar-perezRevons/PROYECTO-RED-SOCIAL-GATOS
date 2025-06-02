import { Component, OnInit } from '@angular/core';
import { ListaFavoritosComponent } from "../../elementos/lista-favoritos/lista-favoritos.component";
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favoritos',
  imports: [ListaFavoritosComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
// export class FavoritosComponent {

// }

export class FavoritosComponent implements OnInit {

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    // Provisionalmente agregamos un favorito
    this.favouritesService.addFavourite('E8dL1Pqpz').subscribe({
      next: (res) => {
        console.log('Favorito agregado con éxito:', res);
        // Llamamos al GET después de agregar
        this.getFavourites();
      },
      error: (err) => {
        console.error('Error al agregar favorito', err);
      }
    });
  }

  getFavourites(): void {
    this.favouritesService.getFavourites().subscribe({
      next: (data) => console.log('Favoritos actuales:', data),
      error: (err) => console.error('Error al obtener favoritos', err)
    });
  }
}
