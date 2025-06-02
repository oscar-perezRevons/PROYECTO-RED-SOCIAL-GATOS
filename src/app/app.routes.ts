import { Routes } from '@angular/router';
import { ImagesComponent } from './paginas/images/images.component';
import { PaginaNoEncontradaComponentComponent } from './paginas/pagina-no-encontrada-component/pagina-no-encontrada-component.component';
import { VotesPageComponent } from './paginas/votes-page/votes-page.component';
import { VoteDetailComponent } from './paginas/vote-detail/vote-detail.component';

export const routes: Routes = [
    { path: 'images', component: ImagesComponent },
    { path: 'votos', component: VotesPageComponent },
    { path: 'votos/:id', component: VoteDetailComponent },
    { path: '', redirectTo: 'images', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponentComponent }
];