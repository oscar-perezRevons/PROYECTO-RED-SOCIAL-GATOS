import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { CommonModule } from '@angular/common';
import { GatoService } from '../../services/gato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-voto',
  templateUrl: './detalle-voto.component.html',
  styleUrls: ['./detalle-voto.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DetalleVotoComponent implements OnInit {
  voto?: Vote;
  errorMsg: string = '';
  imageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private votoService: VoteService, 
    private gatoService: GatoService
  ) {}

  ngOnInit(): void {
    
    // ✅ Ahora tomamos el id_vote desde la URL (ruta: detalle-voto/:id)
    const idVote = Number(this.route.snapshot.paramMap.get('id'));
    console.log('👉 Llamando a getVotoPorId con ID:', idVote);

    if (idVote) {
      this.votoService.getVotoPorId(idVote).subscribe({
        next: (data) => {
          // Como getVotoPorId devuelve UN voto, no es array:
          this.voto = data;
          

          // ✅ Si el voto tiene imagen, la buscamos:
          if (this.voto && this.voto.id_image) {
            this.gatoService.getImagenPorId(this.voto.id_image).subscribe({
              next: (Image) => {
                this.imageUrl = Image.url_image;
              },
              error: (err) => {
                this.errorMsg = 'Error al cargar la imagen: ' + err.message;
              }
            });
          }
        },
        error: (err) => {
          this.errorMsg = 'No se pudo cargar el voto: ' + err.message;
        }
      });
    } else {
      this.errorMsg = 'ID de voto no válido en la URL.';
    }
  }
} 