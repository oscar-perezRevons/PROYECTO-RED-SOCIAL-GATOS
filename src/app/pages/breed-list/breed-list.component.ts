import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../services/breed.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent implements OnInit {
  breeds: any[] = [];

  constructor(private breedService: BreedService) { }

  ngOnInit() {
    this.breedService.getBreeds().subscribe({
      next: (data) => this.breeds = data,
      error: () => alert('Ocurrió un error al cargar razas')
    });
  }
}