import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { image } from '../../models/image.model';
@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-add-voto',
  templateUrl: './add-voto.component.html',
  styleUrls: ['./add-voto.component.scss']
})
export class AddVotoComponent implements OnInit {
  nuevoVoto: Vote = {
    value_vote: 0,
    id_user: 1,
    id_image: 0
  };

  catImages: image[] = [];
  imagenSeleccionada?: image;

  private apiUrl = `${environment.apiUrl}/api/votes`

  constructor(private votoService: VoteService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cargarImagenesGatos();
  }

  cargarImagenesGatos(): void {
    this.http.get<image[]>(`${environment.apiUrl}/api/images`)
      .subscribe(images => {
        this.catImages = images;
      });
  }

  seleccionarImagen(imagen: image): void {
    this.imagenSeleccionada = imagen;
    this.nuevoVoto.id_image = imagen.id_image;
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
