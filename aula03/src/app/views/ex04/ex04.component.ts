import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  img01 = 'assets/1.png';
  img02 = 'assets/2.png';
  img03 = 'assets/3.png';

  img01css = 'class1';
  img02css = 'class2';
  img03css = 'class3';

  constructor() { }

  ngOnInit(): void {
  }

}
