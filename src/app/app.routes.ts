import { Routes } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';
import { PaginaNoEncontradaComponentComponent } from './paginas/pagina-no-encontrada-component/pagina-no-encontrada-component.component';
import { FormularioNuevaImagenComponent } from './paginas/formulario-nueva-imagen/formulario-nueva-imagen.component';
export const routes: Routes = [
    {path:'images',component: ImagesComponent},
    {path: 'formulario-nueva-imagen',component:FormularioNuevaImagenComponent},
    { path: '', redirectTo: 'images', pathMatch: 'full' },
    {path:'**', component: PaginaNoEncontradaComponentComponent}
    
];
