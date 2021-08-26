import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaVideos: IFilme[]= [
    {
      nome: 'Brilho Eterno de uma Mente sem Lembranças (2004)',
      lancamento: '23/07/2004',
      duracao: '1h 48m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/huwNCvLZMET25n6QuOG7e1VwHss.jpg',
      generos: ['Ficção científica', 'Drama', 'Romance'],
      pagina: '/brilho'
    },
    {
      nome: 'Tempos Modernos',
      lancamento: '30/03/1936',
      duracao: '1h 27m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ewqW0uEx1FztaRSvJQqH4pxHecZ.jpg',
      generos:['Comédia', 'Drama'],
      pagina: '/tempos-modernos'
    },
    {
      nome: 'A Noiva Cadáver',
      lancamento: '21/10/2005',
      duracao: '1h 17m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/89B6W9mlTfSxeMEFMSyRBViXy83.jpg',
      generos:['Romance','Fantasia', 'Animação'],
      pagina: '/a-noiva'
    },
    {
    nome: 'Star Wars',
    lancamento: '17/11/1977',
    duracao: '2h 1m',
    classificacao: 82,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg',
    generos:['Aventura, ','Ação, ', 'Ficção científica'],
    pagina: '/star-wars'
  },
  {
  nome: 'A Viagem de Chihiro',
  lancamento: '20/07/2001',
  duracao: '2h 6m',
  classificacao: 82,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bNBXskBHOwPSW21o7iT3N8QVg9L.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
  pagina: '/a-viagem-chihiro'
}
  ];

  constructor(
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirFilme(filme: IFilme){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

}
