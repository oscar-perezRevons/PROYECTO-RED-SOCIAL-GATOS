import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-lista-razas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Razas de gatos</h2>
    <ul *ngIf="breeds.length; else cargando">
      <li *ngFor="let breed of breeds">
        {{ breed.name }} ({{ breed.origin }})
      </li>
    </ul>
    <ng-template #cargando>
      <p>Cargando razas...</p>
    </ng-template>
  `
})
export class ListaRazasComponent implements OnInit {
  breeds: any[] = [];

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.breedsService.getBreeds().subscribe({
      next: (data) => (this.breeds = data),
      error: (err) => console.error('Error al obtener razas', err)
    });
  }
}

