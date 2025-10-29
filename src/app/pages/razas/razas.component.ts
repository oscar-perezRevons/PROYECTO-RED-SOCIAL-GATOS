import { Component, inject, OnInit } from '@angular/core'; // agrego OnInit
import { RazaComponent } from '../../elementos/raza/raza.component';
import { CommonModule } from '@angular/common'; //agrego CommonModule
import { RazaService } from '../../services/raza.service';
import { Breed } from '../../models/breed.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-razas',
  standalone:true, // agrego standalone
  imports: [RazaComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.scss']
})
export class RazasComponent implements OnInit{ // implemento OnInit

  listaDeRazas: Breed[] = [];
  razasFiltradas: Breed[] = [];
  razaService: RazaService = inject(RazaService);
  searchTerm: string = '';
  sortBy: string = 'none';
  isLoading: boolean = false;

  ngOnInit(): void { // agrego metodo ngOnInit remplazando el constructor
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.isLoading = true;
    this.razaService.getBreeds().subscribe({
      next: (data) => {
        this.listaDeRazas = data;
        this.razasFiltradas = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log('HAY UN ERROR', error);
        this.isLoading = false;
      },
      complete: () => console.log('FIN')
    });
  }

  eliminarRaza(RazaId: number): void { // actualiza solo el array local filtrando el eliminado, mas eficiente
    if (confirm('¿Estás seguro de que deseas eliminar esta raza?')) {
      this.razaService.deleteBreed(RazaId).subscribe({
        next: () => {
          this.listaDeRazas = this.listaDeRazas.filter(raza => raza.id_breed !== RazaId);
          this.aplicarFiltros();
          alert('Raza eliminada correctamente');
        },
        error: (err) => {
          console.error('Error al eliminar raza:', err);
          alert('No se pudo eliminar la raza.');
        }
      });
    }
  }

  aplicarFiltros(): void {
    let resultado = [...this.listaDeRazas];

    // Filtrar por búsqueda - sanitize search term
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.trim().toLowerCase().replace(/[<>]/g, '');
      resultado = resultado.filter(raza => 
        raza.name_breed.toLowerCase().includes(searchLower) ||
        raza.origin_breed.toLowerCase().includes(searchLower) ||
        raza.description_breed.toLowerCase().includes(searchLower)
      );
    }

    // Ordenar
    if (this.sortBy === 'name-asc') {
      resultado.sort((a, b) => a.name_breed.localeCompare(b.name_breed));
    } else if (this.sortBy === 'name-desc') {
      resultado.sort((a, b) => b.name_breed.localeCompare(a.name_breed));
    } else if (this.sortBy === 'origin-asc') {
      resultado.sort((a, b) => a.origin_breed.localeCompare(b.origin_breed));
    } else if (this.sortBy === 'origin-desc') {
      resultado.sort((a, b) => b.origin_breed.localeCompare(a.origin_breed));
    }

    this.razasFiltradas = resultado;
  }

  limpiarFiltros(): void {
    this.searchTerm = '';
    this.sortBy = 'none';
    this.razasFiltradas = [...this.listaDeRazas];
  }

  /*eliminarRazaa(id: number): void { // recarga toda la lista desde el servidor, mas seguro
    if (confirm('¿Estás seguro de que deseas eliminar este voto?')) {
      this.razaService.deleteBreed(id).subscribe({
        next: () => {
          alert('Voto eliminado correctamente.');
          this.ngOnInit();
        },
        error: (err) => alert('Error al eliminar la raza: ' + err.message)
      });
    }
  }*/
}
