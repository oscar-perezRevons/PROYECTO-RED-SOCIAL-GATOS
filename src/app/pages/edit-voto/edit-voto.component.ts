import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models/vote.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GatoService } from '../../services/gato.service';

@Component({
  selector: 'app-detalle-voto',
  templateUrl: './edit-voto.component.html',
  styleUrls: ['./edit-voto.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class EditVotoComponent implements OnInit {
  voto!: Vote;
   imageUrl!: string;
  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService,
    private router: Router,
    private gatoService: GatoService,
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.voteService.getVotoPorId(id).subscribe({
        next: (data) => {
          this.voto = data;
          this.gatoService.getImagenPorId(this.voto.id_image).subscribe({
            next: (Image)=>{
              this.imageUrl= Image.url_image;
            }
          })
        },
        error: (err) => {
          alert('Error al cargar voto: ' + err.message);
          this.router.navigate(['/']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.voto && this.voto.id_vote) {
      this.voteService.updateVoto(this.voto.id_vote, this.voto).subscribe({
        next: () => {
          alert('Voto actualizado correctamente.');
          this.router.navigate(['/']);
        },
        error: (err) => {
          alert('Error al actualizar el voto: ' + err.message);
        }
      });
    }
  }

}
