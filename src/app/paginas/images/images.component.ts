import { Component, inject } from '@angular/core';
import { image } from '../../interfaces/image';
import { GatoService } from '../../servicios/gato.service';
import { ImageComponent } from "../../elementos/image/image.component";

@Component({
  selector: 'app-images',
  imports: [ImageComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})

export class ImagesComponent {
    listaDeImagenes: image[]=[];
  imagenService: GatoService = inject(GatoService);


  constructor( ){
  this.imagenService.obtenerTodasLasImagenes().subscribe( 
      data =>{
        this.listaDeImagenes=data,
        console.log("mis datos",data)
      }, 
      error=> console.log( error),
      ()=> console.log('FIN')
    )
  }
}
