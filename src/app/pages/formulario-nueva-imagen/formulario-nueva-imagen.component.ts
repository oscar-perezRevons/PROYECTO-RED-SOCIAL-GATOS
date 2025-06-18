import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GatoService } from '../../services/gato.service';

@Component({
  selector: 'app-formulario-nueva-imagen',
  templateUrl: './formulario-nueva-imagen.component.html',
  styleUrl: './formulario-nueva-imagen.component.scss'
})
export class FormularioNuevaImagenComponent {
  selectedFile: File | null = null;

  constructor(private imagenService: GatoService) {}

  onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          this.selectedFile = input.files[0];
      }
  }

  async subirInfoForm() {
      if (!this.selectedFile) {
          console.error('Debe seleccionar una imagen.');
          return;
      }

      const url_image = await this.imagenService.subirImagen(this.selectedFile);
      if (!url_image) {
          console.error('Error al subir la imagen.');
          return;
      }

      const breed = (document.getElementById('name') as HTMLInputElement).value;

      this.imagenService.enviarDatosBackend(url_image, Number(breed)).subscribe(
          response => {
              console.log('Imagen guardada en el backend:', response);
          },
          error => {
              console.error('Error al guardar imagen:', error);
          }
      );
  }

} // <--- Asegúrate de que está exportado
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
