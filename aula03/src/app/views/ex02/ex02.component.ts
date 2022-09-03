import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  Upper = 'upper';
  texto = 'teste';

  constructor() { }

  ngOnInit(): void {
  }

  enviarString(texto:string){
    return texto;
  };

}
