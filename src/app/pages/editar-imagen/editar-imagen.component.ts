import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GatoService } from '../../services/gato.service';

@Component({
  selector: 'app-editar-imagen',
  templateUrl: './editar-imagen.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./editar-imagen.component.scss']
})
export class EditarImagenComponent implements OnInit {
  form!: FormGroup;
  imageId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private imageService: GatoService
  ) {}

  ngOnInit(): void {
    this.imageId = Number(this.route.snapshot.paramMap.get('id')); // Captura el id de la URL

    this.form = this.fb.group({
      url_image: [''],
      id_breed: ['']
    });

    this.imageService.getImageById(this.imageId).subscribe(image => {
      this.form.patchValue(image); // Cargar datos de la imagen
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.imageService.updateImage(this.imageId, this.form.value).subscribe(response => {
        console.log('Imagen actualizada:', response);
      });
    }
  }
}