import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from '../../models/breed.model';
import { RazaService } from '../../services/raza.service';

@Component({
  selector: 'app-detalles-raza',
  imports: [],
  templateUrl: './detalles-raza.component.html',
  styleUrl: './detalles-raza.component.scss'
})
export class DetallesRazaComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  razaService: RazaService = inject(RazaService);
  detalleRaza: Breed | undefined;
  constructor() {
    const idRaza = String(this.route.snapshot.params['id']);
    this.razaService.obtenerRazaPorId(idRaza).subscribe(data => this.detalleRaza = data)
  }
}
