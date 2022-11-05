import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { RegiaoService } from 'src/app/services/regiao.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css']
})
export class RegiaoComponent implements OnInit {

  regiao = '';
  constructor() { }

  ngOnInit(): void {
  }

  consultarRegiao(){
    this.regiaoService.obterEndereco(this.regiao).subscribe(regiao => {
      alert(regiao);
      this.regiao = regiao;
    });
  }
}
