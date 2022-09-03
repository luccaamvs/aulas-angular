import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component implements OnInit {

  texto = "normal";

  constructor() { }

  ngOnInit(): void {
  }

  feliz(){
    this.texto = "feliz";
  }

  triste(){
    this.texto = "triste";
  }

  irritado(){
    this.texto = "irritado";
  }

  trocaTexto(palavra: string){
    this.texto = palavra;
  }
}
