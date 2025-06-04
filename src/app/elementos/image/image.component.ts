import { Component, Input } from '@angular/core';
import { image } from '../../interfaces/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() Imagen!: image
}
