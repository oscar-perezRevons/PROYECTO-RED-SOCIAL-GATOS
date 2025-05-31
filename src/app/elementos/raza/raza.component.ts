import { Component, Input } from '@angular/core';
import { Breed } from '../../interfaces/breed';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-raza',
  imports: [RouterLink],
  templateUrl: './raza.component.html',
  styleUrl: './raza.component.scss'
})
export class RazaComponent {
  @Input() raza!: Breed; 
}
