import { Component, inject, OnInit } from '@angular/core'; // agrego OnInit
import { RazaComponent } from '../../elementos/raza/raza.component';
import { CommonModule } from '@angular/common'; //agrego CommonModule
import { RazaService } from '../../services/raza.service';
import { Breed } from '../../models/breed.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-razas',
  standalone:true, // agrego standalone
  imports: [RazaComponent, CommonModule,RouterLink],
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.scss']
})
export class RazasComponent implements OnInit{ // implemento OnInit

  listaDeRazas: Breed[] = [];
  razaService: RazaService = inject(RazaService);
  ngOnInit(): void { // agrego metodo ngOnInit remplazando el constructor
    this.razaService.getBreeds().subscribe(
      data => this.listaDeRazas = data,
      error => console.log('HAY UN ERROR'),
      () => console.log('FIN'))
  }

  eliminarRaza(RazaId: number): void { // actualiza solo el array local filtrando el eliminado, mas eficiente
    this.razaService.deleteBreed(RazaId).subscribe({
      next: () => {
        this.listaDeRazas = this.listaDeRazas.filter(raza => raza.id_breed !== RazaId);
      },
      error: (err) => {
        console.error('Error al eliminar raza:', err);
        alert('No se pudo eliminar la raza.');
      }
    });
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
