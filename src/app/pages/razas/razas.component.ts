import { Component, inject } from '@angular/core';
import { RazaComponent } from '../../elementos/raza/raza.component';
import { RazaService } from '../../services/raza.service';
import { Breed } from '../../models/breed.model';

import { Router } from '@angular/router';//prueba

@Component({
  selector: 'app-razas',
  imports: [RazaComponent],
  templateUrl: './razas.component.html',
  styleUrl: './razas.component.scss'
})
export class RazasComponent {
  listaDeRazas: Breed[] = [];
  razaService: RazaService = inject(RazaService);
  constructor() {
    this.razaService.obtenerTodasLasRazas().subscribe(data => this.listaDeRazas = data,
      error => console.log('HAY UN ERROR'),
      () => console.log('FIN'))
  }


  router = inject(Router);  //prueba
  buscarRaza(nombre: string) {
    if (nombre.trim()) {
      const destino = `/filtrar-razas/${encodeURIComponent(nombre.trim())}`;
      this.router.navigate([destino]);
    }
  }
}
