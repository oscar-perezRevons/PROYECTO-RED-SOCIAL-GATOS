import { Component, OnInit } from '@angular/core';
import { RazaService } from '../../services/raza.service'; // remplaze BreedService por el nuevo servicio actualizado 
import { CommonModule } from '@angular/common';
import { Breed } from '../../models/breed.model'; // agrege este import

@Component({
  imports: [CommonModule],
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent implements OnInit {
  breeds: Breed[] = []; //Remplaze any por Breed

  constructor(private RazaService: RazaService) { }

  ngOnInit() {
    this.RazaService.getBreeds().subscribe({
      next: (data) => this.breeds = data,
      error: () => alert('Ocurrió un error al cargar razas')
    });
  }
}