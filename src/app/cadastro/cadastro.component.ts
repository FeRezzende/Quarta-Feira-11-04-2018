import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClientService } from '../services/cadastro-clientes.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroClienteComponent implements OnInit{

  formGroup : FormGroup;
  constructor(private formBuilder : FormBuilder, private clienteService: ClientService) {
  this.formGroup = this.formBuilder.group({
nome: ['',[Validators.required]],
endereco: ['',[Validators.required]],
telefone: ['',[Validators.required]],
dataNascimento: ['',[Validators.required]],
email: ['',[Validators.required,Validators.email]],
senha: ['',[Validators.required]],

  })

   }

  ngOnInit() {
  }
  cadastrar(){
    this.clienteService.insert(this.formGroup.value)
    .subscribe(response => {
      console.log("Cadastrado Com Sucesso");
    }, error =>{
      console.log("Erro ao Cadastrar");
    })
    console.log(this.formGroup.value);
  }

}