import { Routes } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';
import { ListaRazasComponent } from './paginas/lista-razas/lista-razas.component';
import { PaginaNoEncontradaComponentComponent } from './paginas/pagina-no-encontrada-component/pagina-no-encontrada-component.component';

export const routes: Routes = [
  { path: 'images', component: ImagesComponent },
  { path: 'razas', component: ListaRazasComponent },
  { path: '', redirectTo: 'images', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponentComponent }
];

