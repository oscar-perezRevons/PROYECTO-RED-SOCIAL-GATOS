import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { image } from '../../interfaces/image';

@Component({
  selector: 'app-image',
  imports: [RouterLink],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input()Imagen!:image
}
