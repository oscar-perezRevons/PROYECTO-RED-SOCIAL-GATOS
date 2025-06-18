import { Component, inject, Input } from '@angular/core';
import { image } from '../../models/image.model';
import { GatoService } from '../../services/gato.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent{
  listaDeImagenes: image[]=[];
  imagenService: GatoService = inject(GatoService);
  favouritesService: FavouritesService=inject(FavouritesService);
  constructor(){
    this.imagenService.getAllTheImages().subscribe(
      data=>{
        this.listaDeImagenes=data;
        console.log('mis imágenes recibidas del get: ',data);
      },
       error => console.log(error),
       () => console.log('FIN')
    );
  }
  //borrar una imagen
   deleteImage(id: number) {
    this.imagenService.deleteImage(id).subscribe(() => {
      this.listaDeImagenes = this.listaDeImagenes.filter(imagen => imagen.id_image !== id);
      console.log("Imagen eliminada correctamente");
      alert("Imagen eliminada correctamente");
    });
  }

  //agregar a favoritos una imagen
  agregarFavorito(idImage: number) {
    const idUser = 1; // Reemplaza con el ID del único usuario que tenemos

    this.favouritesService.agregarFavorito(idUser, idImage).subscribe(
      response => alert("Añadido a favoritos con éxito"),
      error => console.error('Error al añadir favorito:', error)
    );
  }

}
// export class ImagesComponent {
//   // @Input()Imagen!:image;
//   listaDeImagenes: image[] = [];
//   listaDeImagenesRazas: string[] = [];
//   listaDeMisImagenes: image[] = [];
//   imagenService: GatoService = inject(GatoService);
//   imageUrl: string = '';
//   idInput: string = '';
//   razaInput: string = '';
//   imagenes: string[] = [];
//   tengoImgsSubidas: boolean = false;
//   subIdInput: string = '';
//   private router = inject(Router);
//   favouritesService = inject(FavouritesService);

//   constructor() {

//     this.imagenService.obtenerTodasLasImagenes().subscribe(
//       data => {
//         this.listaDeImagenes = data.map(imagen => {
//           return {
//             ...imagen,
//             name: imagen.breeds.length > 0 ? imagen.breeds[0].name : "Sin raza"
//           };
//         });

//         console.log("mis datos", this.listaDeImagenes);
//       },
//       error => console.log(error),
//       () => console.log('FIN')
//     );
//   }

//   buscarImagenPorRaza() {
//     if (this.razaInput.trim() === '') {
//       alert('Ingresa el nombre de una raza para buscar imágenes');
//       return;
//     }

//     this.imagenService.obtenerIdPorNombre(this.razaInput).subscribe({
//       next: breeds => {
//         if (breeds.length > 0) {
//           const idRaza = breeds[0].id;
//           this.imagenService.obtenerImagenesPorRaza(idRaza).subscribe({
//             next: imagenes => {
//               this.listaDeImagenesRazas = imagenes.map(img => img.url);
//               console.log("Imágenes obtenidas:", this.listaDeImagenesRazas);
//             },
//             error: error => console.log("Error al obtener imágenes", error)
//           });
//         } else {
//           alert("No se encontró la raza ingresada");
//         }
//       },
//       error: error => console.log("Error al obtener el ID de la raza", error)
//     });
//   }

//   irAFormulario() {
//     this.router.navigate(['/formulario-nueva-imagen']);
//   }
//   getMisImags() {
//     this.imagenService.obtenerTodasMisImagenes().subscribe(
//       data => {
//         console.log("Las imágenes que subí", data);
//         this.listaDeMisImagenes = data;
//         this.tengoImgsSubidas = data.length > 0;
//       },
//       error => {
//         alert("Error al mostrar mis imágenes");
//         console.log(error);
//       },
//       () => console.log('FIN')
//     );
//   }
//   // componente.ts
//   borrarImagen(id: string) {
//     this.imagenService.borrarImagenPorId(id).subscribe({
//       next: data => {
//         console.log("Imagen eliminada con éxito: ", data);
//         alert("Imagen eliminada con éxito");

//         // Actualizar la lista después de la eliminación
//         this.listaDeMisImagenes = this.listaDeMisImagenes.filter(img => img.id !== id);
//       },
//       error: error => {
//         console.error(error);
//         alert("Error al borrar la imagen");
//       }
//     });
//   }

//   agregarAFavoritos(imageId: string) {
//     this.favouritesService.addFavourite(imageId).subscribe({
//       next: (res) => {
//         console.log("Agregado a favoritos:", res);
//         alert("Imagen agregada a favoritos");
//       },
//       error: (err) => {
//         console.error("Error al agregar a favoritos:", err);
//         alert("No se pudo agregar a favoritos");
//       }
//     });
//   }

// }