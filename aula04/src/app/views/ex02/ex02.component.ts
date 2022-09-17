import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  ClasseCss = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

   trocarClasse() {
    if(this.ClasseCss == 'vermelho'){
      this.ClasseCss = 'azul';
    }else{
      this.ClasseCss = 'vermelho'
    }
  }

}
