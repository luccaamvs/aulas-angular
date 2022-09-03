import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.css']
})
export class Ex07Component implements OnInit {

    div1 = "div1";
    div2 = "div2";
    div3 = "div3";

  constructor() { }

  ngOnInit(): void {
  }


  primeira(){
      this.div1 = "div1"
      this.div2 = "apagada";
      this.div3 = "apagada";
  }
  segunda(){
    this.div1 = "apagada"
    this.div2 = "div2";
    this.div3 = "apagada";
  }
  terceira(){
    this.div1 = "apagada"
    this.div2 = "apagada";
    this.div3 = "div3";
  }

}
