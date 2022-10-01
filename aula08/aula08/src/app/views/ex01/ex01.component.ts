import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  titulos   = ['Usuario01', 'Usuario02', 'Usuario03'];
  conteudos = ['Exemplo de texto01', 'Exemplo de texto02', 'Exemplo de texto03'];

  constructor() { }

  ngOnInit(): void {
  }

}
