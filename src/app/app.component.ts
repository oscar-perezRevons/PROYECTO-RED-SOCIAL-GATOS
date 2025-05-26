import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'red-social-gatos';
}
