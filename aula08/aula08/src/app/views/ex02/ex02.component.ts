import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  nomes: string[] = [''];
  nome = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    this.nomes.push(this.nome);
  }

}
