import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-nueva-imagen',
  //imports: [RouterLink],
  templateUrl: './formulario-nueva-imagen.component.html',
  styleUrl: './formulario-nueva-imagen.component.scss'
})
export class FormularioNuevaImagenComponent { } // <--- Asegúrate de que está exportado
// import { Component, inject } from '@angular/core';
// import { GatoService } from '../../services/gato.service';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-formulario-nueva-imagen',
//   imports: [RouterLink],
//   templateUrl: './formulario-nueva-imagen.component.html',
//   styleUrl: './formulario-nueva-imagen.component.scss'
// })
// export class FormularioNuevaImagenComponent {
//   imagenService: GatoService = inject(GatoService);
//   selectedFile: File | null = null;
//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.selectedFile = input.files[0];
//       console.log('Archivo seleccionado:', this.selectedFile);
//     }
//   }
//   subirInfoForm() {
//     if (!this.selectedFile) return;

//     const formData = new FormData();
//     formData.append('file', this.selectedFile, this.selectedFile.name);
//     console.log(this.selectedFile.name);
//     formData.append('sub_id', this.selectedFile.name);
//     formData.append('breed_ids', 'unknown');
//     // formData.append('breeds[0].name',toString(name));

//     this.imagenService.postearNuevaImagen(formData).subscribe({
//       next: (res) => { alert('Subida de imagen exitosa '), console.log('Éxito ', res) },
//       error: (error) => {
//         alert('Error al subir la imagen');

//         console.log(error);
//       }
//     });
//   }

// }
