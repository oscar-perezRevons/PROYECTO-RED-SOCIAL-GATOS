import { Routes } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';
import { PaginaNoEncontradaComponentComponent } from './paginas/pagina-no-encontrada-component/pagina-no-encontrada-component.component';
import { RazasComponent } from './paginas/razas/razas.component';
import { DetallesRazaComponent } from './paginas/detalles-raza/detalles-raza.component';
import { FiltrarRazasComponent } from './paginas/filtrar-razas/filtrar-razas.component';
import { VotesPageComponent } from './components/vote/votes-page.component';
import { DetalleVotoComponent } from './paginas/detalle-voto/detalle-voto.component';
import { AddVotoComponent } from './paginas/add-voto/add-voto.component';
import { EditVotoComponent } from './paginas/edit-voto/edit-voto.component';

export const routes: Routes = [
    { path: 'images', component: ImagesComponent },
    { path: 'razas', component: RazasComponent },
    { path: 'detalles-raza/:id', component: DetallesRazaComponent },
    { path: 'filtrar-razas/:raza', component: FiltrarRazasComponent },
    { path: 'votos', component: VotesPageComponent },
    { path: 'voto-por-subid/:sub_id', component: DetalleVotoComponent },
    { path: 'voto-por-id/:id', component: DetalleVotoComponent },
    { path: 'agregar-voto', component: AddVotoComponent },
    { path: 'editar-voto/:id', component: EditVotoComponent },
    { path: '', redirectTo: 'images', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponentComponent }
];


