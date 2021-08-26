import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'brilho',
    loadChildren: () => import('./filmes/brilho/brilho.module').then( m => m.BrilhoPageModule)
  },
  {
    path: 'tempos-modernos',
    loadChildren: () => import('./filmes/tempos-modernos/tempos-modernos.module').then( m => m.TemposModernosPageModule)
  },
  {
    path: 'a-noiva',
    loadChildren: () => import('./filmes/a-noiva/a-noiva.module').then( m => m.ANoivaPageModule)
  },
  {
    path: 'star-wars',
    loadChildren: () => import('./filmes/star-wars/star-wars.module').then( m => m.StarWarsPageModule)
  },
  {
    path: 'a-viagem-chihiro',
    loadChildren: () => import('./filmes/a-viagem-chihiro/a-viagem-chihiro.module').then( m => m.AViagemChihiroPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
