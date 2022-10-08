import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filmes: Filme[] = [];
  filmeSelecionado?: Filme;

  constructor() {
    const filmeHobbit = new Filme();
    filmeHobbit.nome = 'O Hobbit';
    filmeHobbit.nota = 8;

    this.filmes.push(filmeHobbit);

    const filmeHp = new Filme();
    filmeHp.nome = 'Harry Potter';
    filmeHp.nota = 6;

    this.filmes.push(filmeHp);

   }

  ngOnInit(): void {
  }

  selecionarFilme(filme: Filme){
    this.filmeSelecionado = filme;
  }

  fechar(){
    this.filmeSelecionado = undefined;
  }
  novoFilme(){
    this.filmeSelecionado = new Filme();
    this.filmes.push(this.filmeSelecionado);
  }
  removerFilme(index: number){
    this.filmes.splice(index, 1);
  }
}
