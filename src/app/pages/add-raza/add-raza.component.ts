import { Component} from '@angular/core';
import { RazaService } from '../../services/raza.service';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-raza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-raza.component.html',
  styleUrls: ['./add-raza.component.scss']
})
export class AddRazaComponent{

  nuevaRaza = {
  name_breed: '',
  origin_breed: '',
  description_breed: ''
  };

  constructor(private razaService: RazaService,/* private http: HttpClient,*/ private router: Router) { }

  agregarRaza(): void {
    this.razaService.createBreed(this.nuevaRaza).subscribe({
      next: () => {
        alert('Raza agregada con éxito!');
        this.router.navigate(['/']);
      },
      error: err => {
        console.error('Error al agregar raza:', err);
        alert('Error al agregar la raza.');
      }
    });
  }
}