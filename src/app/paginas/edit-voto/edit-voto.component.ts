import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../interfaces/vote';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-voto',
  templateUrl: './edit-voto.component.html',
  styleUrls: ['./edit-voto.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class EditVotoComponent implements OnInit {
  voto!: Vote;

  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.voteService.getVotoPorId(id).subscribe({
        next: (data) => {
          this.voto = data;
        },
        error: (err) => {
          alert('Error al cargar voto: ' + err.message);
          this.router.navigate(['/']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.voto && this.voto.id) {
      this.voteService.updateVoto(this.voto.id, this.voto).subscribe({
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
