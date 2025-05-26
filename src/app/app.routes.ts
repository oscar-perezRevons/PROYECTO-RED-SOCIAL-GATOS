import { Routes } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';
import { PaginaNoEncontradaComponentComponent } from './paginas/pagina-no-encontrada-component/pagina-no-encontrada-component.component';
export const routes: Routes = [
    {path:'images',component: ImagesComponent},
    {path:'**', component: PaginaNoEncontradaComponentComponent},
    { path: '', redirectTo: 'images', pathMatch: 'full' }
    
];
