import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { CommonModule } from '@angular/common';
import { GatoService } from '../../services/gato.service';

@Component({
  selector: 'app-detalle-voto',
  templateUrl: './detalle-voto.component.html',
  styleUrls: ['./detalle-voto.component.scss'],
  imports: [CommonModule]
})
export class DetalleVotoComponent implements OnInit {
  voto?: Vote;
  errorMsg: string = '';
  imageUrl: string = '';
  constructor(
    private route: ActivatedRoute,
    private votoService: VoteService, 
    private gatoService:  GatoService
  ) { }

  ngOnInit(): void {
    const subId = Number(this.route.snapshot.paramMap.get('sub_id'));
    if (subId) {
      this.votoService.getVotoPorSubId(subId).subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.voto = data[0]; // solo tomamos el primero

            this.gatoService.getImagenPorId(this.voto.id_image).subscribe({
              next:(Image)=>{
                this.imageUrl = Image.url_image;
              }
            })
          } else {
            this.errorMsg = 'No se encontró ningún voto con ese sub_id.';
          }
        },
      });
    }
  }
}
