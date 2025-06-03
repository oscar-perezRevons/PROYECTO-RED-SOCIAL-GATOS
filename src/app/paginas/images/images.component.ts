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
  listaDeImagenesRazas:string[]=[];
  listaDeMisImagenes: image[] = [];
  imagenService: GatoService = inject(GatoService);
  imageUrl: string = '';
  idInput: string = '';
  razaInput: string = '';
  imagenes: string[] = [];
  tengoImgsSubidas: boolean = false;
  private router = inject(Router);

  constructor() {

    this.imagenService.obtenerTodasLasImagenes().subscribe(
      data => {
        this.listaDeImagenes = data.map(imagen => {
          return {
            ...imagen, 
            name: imagen.breeds.length > 0 ? imagen.breeds[0].name : "Sin raza" 
          };
        });

        console.log("mis datos", this.listaDeImagenes);
      },
      error => console.log(error),
      () => console.log('FIN')
    );
  }

 buscarImagenPorRaza() {
  if (this.razaInput.trim() === '') {
    alert('Ingresa el nombre de una raza para buscar imágenes');
    return;
  }

  this.imagenService.obtenerIdPorNombre(this.razaInput).subscribe({
    next: breeds => {
      if (breeds.length > 0) {
        const idRaza = breeds[0].id; 
        this.imagenService.obtenerImagenesPorRaza(idRaza).subscribe({
          next: imagenes => {
            this.listaDeImagenesRazas = imagenes.map(img => img.url);
            console.log("Imágenes obtenidas:", this.listaDeImagenesRazas);
          },
          error: error => console.log("Error al obtener imágenes", error)
        });
      } else {
        alert("No se encontró la raza ingresada");
      }
    },
    error: error => console.log("Error al obtener el ID de la raza", error)
  });
}

  irAFormulario() {
    this.router.navigate(['/formulario-nueva-imagen']);
  }
  getMisImags() {
    this.imagenService.obtenerTodasMisImagenes().subscribe(
      data => {
        console.log("Las imágenes que subí", data);
        this.listaDeMisImagenes = data;
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