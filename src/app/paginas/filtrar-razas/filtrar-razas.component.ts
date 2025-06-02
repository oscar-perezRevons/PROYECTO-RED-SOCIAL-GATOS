import { Component, inject } from '@angular/core';
import { RazaComponent } from '../../elementos/raza/raza.component';
import { RazaService } from '../../servicios/raza.service';
import { Breed } from '../../interfaces/breed';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtrar-razas',
  imports: [RazaComponent],
  templateUrl: './filtrar-razas.component.html',
  styleUrl: './filtrar-razas.component.scss'
})
export class FiltrarRazasComponent {
  route: ActivatedRoute = inject(ActivatedRoute); 
  listaDeRazas: Breed[] = [];
  razaService: RazaService = inject(RazaService); 
  constructor() {  
    const nombreRaza = String(this.route.snapshot.params['raza']); 
    this.razaService.obtenerRazas(nombreRaza).subscribe( data => this.listaDeRazas = data, 
    error => console.log('HAY UN ERROR'), 
    () => console.log('FIN')  )
  }
}