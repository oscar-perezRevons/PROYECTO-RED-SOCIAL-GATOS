import { Routes } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';
import { PaginaNoEncontradaComponentComponent } from './pages/pagina-no-encontrada-component/pagina-no-encontrada-component.component';
import { FormularioNuevaImagenComponent } from './pages/formulario-nueva-imagen/formulario-nueva-imagen.component';
import { RazasComponent } from './pages/razas/razas.component';
import { DetallesRazaComponent } from './pages/detalles-raza/detalles-raza.component';
import { FiltrarRazasComponent } from './pages/filtrar-razas/filtrar-razas.component';
import { VotesPageComponent } from './pages/votes-page/votes-page.component';
import { DetalleVotoComponent } from './pages/detalle-voto/detalle-voto.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { AddVotoComponent } from './pages/add-voto/add-voto.component';
import { EditVotoComponent } from './pages/edit-voto/edit-voto.component';
import { BreedListComponent } from './pages/breed-list/breed-list.component';

export const routes: Routes = [
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'formulario-nueva-imagen', component: FormularioNuevaImagenComponent },
  { path: 'razas', component: RazasComponent },
  { path: 'detalles-raza/:id', component: DetallesRazaComponent },
  { path: 'filtrar-razas/:raza', component: FiltrarRazasComponent },
  { path: 'votos', component: VotesPageComponent },
  { path: 'voto-por-subid/:sub_id', component: DetalleVotoComponent },
  { path: 'voto-por-id/:id', component: DetalleVotoComponent },
  { path: 'agregar-voto', component: AddVotoComponent },
  { path: 'editar-voto/:id', component: EditVotoComponent },
  { path: 'breeds', component: BreedListComponent },
  { path: '', redirectTo: 'images', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponentComponent }
];
