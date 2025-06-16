import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RazaService } from '../../services/raza.service';
import { Breed } from '../../models/breed.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-raza',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-raza.component.html',
  styleUrls: ['./edit-raza.component.scss'],
})
export class EditRazaComponent implements OnInit {
  raza: Breed | undefined;

  constructor(
    private route: ActivatedRoute,
    private razaService: RazaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.razaService.getBreedByIdLocal(id).subscribe({
        next: (data) => {
          this.raza = data;
        },
        error: (err) => {
          alert('Error al cargar raza: ' + err.message);
          this.router.navigate(['/']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.raza && this.raza.id_breed) {
      this.razaService.updateBreed(this.raza.id_breed, this.raza).subscribe({
        next: () => {
          alert('Raza actualizada correctamente.');
          this.router.navigate(['/']);
        },
        error: (err) => {
          alert('Error al actualizar la raza: ' + err.message);
        }
      });
    }
  }
}