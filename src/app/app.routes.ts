import { Routes } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';
import { PaginaNoEncontradaComponentComponent } from './paginas/pagina-no-encontrada-component/pagina-no-encontrada-component.component';
import { FormularioNuevaImagenComponent } from './paginas/formulario-nueva-imagen/formulario-nueva-imagen.component';
import { RazasComponent } from './paginas/razas/razas.component';
import { DetallesRazaComponent } from './paginas/detalles-raza/detalles-raza.component';
import { FiltrarRazasComponent } from './paginas/filtrar-razas/filtrar-razas.component';

export const routes: Routes = [
    {path:'images',component: ImagesComponent},
  {path: 'formulario-nueva-imagen',component:FormularioNuevaImagenComponent},
    {path:'razas',component: RazasComponent},
    {path:'detalles-raza/:id',component: DetallesRazaComponent},
    {path:'filtrar-razas/:raza', component: FiltrarRazasComponent},
    {path: '', redirectTo: 'images', pathMatch: 'full' },
    {path:'**', component: PaginaNoEncontradaComponentComponent}
];
