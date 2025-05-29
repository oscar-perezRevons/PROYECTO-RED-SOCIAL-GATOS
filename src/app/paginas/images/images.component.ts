import { Component, inject } from '@angular/core';
import { image } from '../../interfaces/image';
import { GatoService } from '../../servicios/gato.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {
  listaDeImagenes: image[] = [];
  imagenService: GatoService = inject(GatoService);
  imageUrl: string = ''; 
  idInput: string = ''; 

  constructor() {
    this.imagenService.obtenerTodasLasImagenes().subscribe( 
      data =>{
        this.listaDeImagenes=data,
        console.log("mis datos",data)
      }, 
      error=> console.log( error),
      ()=> console.log('FIN')
    )
  }

  buscarImagen() {
    if (this.idInput.trim() === '') {
      alert('El campo no puede estar vacío');
      return;
    }

    this.imagenService.obtenerImagenPorId(this.idInput).subscribe({
      next: data => {
        console.log("Imagen obtenida:", data);
        this.imageUrl = data.url ?? ''; 
      },
      error: error => {alert("Error al obtener imagen"), console.log(error)}
    });
  }
}