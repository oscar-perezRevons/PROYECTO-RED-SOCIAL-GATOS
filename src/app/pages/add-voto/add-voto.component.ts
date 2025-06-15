import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CatImage {
  id: string;
  url: string;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-add-voto',
  templateUrl: './add-voto.component.html',
  styleUrls: ['./add-voto.component.scss']
})
export class AddVotoComponent implements OnInit {
  nuevoVoto: Vote = {
    image_id: '',
    sub_id: '',
    created_at: new Date().toISOString(),
    value: 0,
    country_code: '',
    image_url: ''
  };

  catImages: CatImage[] = [];
  imagenSeleccionada?: CatImage;

  constructor(private votoService: VoteService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cargarImagenesGatos();
  }

  cargarImagenesGatos(): void {
    this.http.get<CatImage[]>('https://api.thecatapi.com/v1/images/search?limit=5')
      .subscribe(images => {
        this.catImages = images;
      });
  }

  seleccionarImagen(imagen: CatImage): void {
    this.imagenSeleccionada = imagen;
    this.nuevoVoto.image_id = imagen.id;
    this.nuevoVoto.image_url = imagen.url;
  }

  agregarVoto(): void {
    if (!this.imagenSeleccionada) {
      alert('Por favor selecciona una imagen de gato.');
      return;
    }
    this.votoService.addVoto(this.nuevoVoto).subscribe({
      next: () => {
        alert('Voto agregado con éxito!');
        this.router.navigate(['/']);
      },
      error: err => {
        console.error('Error al agregar el voto:', err);
        alert('Error al agregar el voto.');
      }
    });
  }
}
