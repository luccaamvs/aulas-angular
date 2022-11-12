import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteInsercao?: Cliente;


  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  novo(){
    this.clienteInsercao = new Cliente();
  }

  cancelar(){
    this.clienteInsercao = undefined;
  }

  salvar(){
    if(!this.clienteInsercao){
      return;
    }

    this.clienteService.inserir(this.clienteInsercao).subscribe(cliente =>{
      this.listar();
    });
  }
}


