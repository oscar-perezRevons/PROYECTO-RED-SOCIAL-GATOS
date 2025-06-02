import { Component, inject, Input } from '@angular/core';
import { image } from '../../interfaces/image';
import { GatoService } from '../../servicios/gato.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {
  // @Input()Imagen!:image;
  listaDeImagenes: image[] = [];
  imagenService: GatoService = inject(GatoService);
  imageUrl: string = '';
  idInput: string = '';
  tengoImgsSubidas: boolean = false;
  private router = inject(Router);

  constructor() {
    this.imagenService.obtenerTodasLasImagenes().subscribe(
      data => {
        this.listaDeImagenes = data,
          console.log("mis datos", data)
      },
      error => console.log(error),
      () => console.log('FIN')
    )
  }

  buscarImagen() {
    if (this.idInput.trim() === '') {
      alert('Ingresa un id para buscar un gato');
      return;
    }

    this.imagenService.obtenerImagenPorId(this.idInput).subscribe({
      next: data => {
        console.log("Imagen obtenida:", data);
        this.imageUrl = data.url ?? '';
      },
      error: error => { alert("Error al obtener imagen"), console.log(error) }

    });
  }

  irAFormulario() {
    this.router.navigate(['/formulario-nueva-imagen']);
  }
  getMisImags() {
    this.imagenService.obtenerTodasMisImagenes().subscribe(
      data => {
        console.log("Las imágenes que subí", data);
        this.listaDeImagenes = data;
        this.tengoImgsSubidas = data.length > 0;
      },
      error => {
        alert("Error al mostrar mis imágenes");
        console.log(error);
      },
      () => console.log('FIN')
    );
  }
  borrarImagen() {
    if (this.idInput.trim() === '') {
      alert('Ingresa un id para borrar un gato');
      return;
    }

    this.imagenService.borrarImagenPorId(this.idInput).subscribe({
      next: data => {
        console.log("Imagen eliminada con éxito: ", data);
        alert("Imagen eliminada con éxito");
        this.imageUrl = '';
      },
      error: error => {
        if (error.status === 400) {
          alert('Error: No puedes eliminar imágenes que no subiste');
        } else {
          alert('Error al borrar la imagen');
        }
        console.log(error);
      }
    });
  }

}