import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  imagem = 'assets/4.png'

  constructor() { }

  ngOnInit(): void {
  }

  darCor(){
    if(this.imagem == 'assets/4.png'){
      this.imagem = 'assets/5.png';
    }else{
      this.imagem = 'assets/4.png';
    }


  }

}
