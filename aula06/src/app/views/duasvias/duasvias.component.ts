import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duasvias',
  templateUrl: './duasvias.component.html',
  styleUrls: ['./duasvias.component.css']
})
export class DuasviasComponent implements OnInit {

  nome = '';
  sobrenome = '';

  valor1= 0;
  valor2= 0;

  constructor() { }

  ngOnInit(): void {
  }

  limparNome(){
    this.nome = '';

  }
  obterNomeCompleto(){
    return (this.nome + ' ' + this.sobrenome).toUpperCase();
  }
  soma(){
    return this.valor1 + this.valor2;
  }
  multiplicacao(){
    return this.valor1 * this.valor2;
  }

}
