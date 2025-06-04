import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../interfaces/vote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-voto',
  templateUrl: './detalle-voto.component.html',
  styleUrls: ['./detalle-voto.component.scss'],
  imports: [CommonModule]
})
export class DetalleVotoComponent implements OnInit {
  voto?: Vote;
  errorMsg: string = '';

  constructor(
    private route: ActivatedRoute,
    private votoService: VoteService
  ) { }

  ngOnInit(): void {
    const subId = this.route.snapshot.paramMap.get('sub_id');
    if (subId) {
      this.votoService.getVotoPorSubId(subId).subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.voto = data[0]; // solo tomamos el primero
          } else {
            this.errorMsg = 'No se encontró ningún voto con ese sub_id.';
          }
        },
      });
    }
  }
}
