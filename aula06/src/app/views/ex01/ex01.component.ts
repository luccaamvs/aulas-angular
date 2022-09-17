import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  textoValor1 = '';
  textoValor2 = '';

  constructor() { }

  ngOnInit(): void {
  }

  somarValores(){
    return Number(this.textoValor1) + Number(this.textoValor2);
  }
}
