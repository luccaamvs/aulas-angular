import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-app-jogos',
  templateUrl: './app-jogos.component.html',
  styleUrls: ['./app-jogos.component.css']
})
export class AppJogosComponent implements OnInit {

  jogos: Jogo[] = [];
  jogoSelecionado?: Jogo;

  constructor() {
    let exemplo = new Jogo();
    exemplo.nome = 'teste';
    exemplo.produtora = 'produtora-teste';
    exemplo.plataforma = 'plataforma-teste';
    exemplo.genero = 'nao-binare';
    this.jogos.push(exemplo);
  }

  ngOnInit(): void {
  }



  novoJogo(){
    this.jogoSelecionado = new Jogo();
    this.jogos.push(this.jogoSelecionado);
  }

  selecionarJogo(jogo: Jogo){
    this.jogoSelecionado = jogo;
  }

  removerJogo(index: number){
    this.jogos.splice(index,1);
  }
}
