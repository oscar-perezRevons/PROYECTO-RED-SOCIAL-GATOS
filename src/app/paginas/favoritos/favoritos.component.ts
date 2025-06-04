import { Component, OnInit } from '@angular/core';
import { ListaFavoritosComponent } from "../../elementos/lista-favoritos/lista-favoritos.component";
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favoritos',
  imports: [ListaFavoritosComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {

}
