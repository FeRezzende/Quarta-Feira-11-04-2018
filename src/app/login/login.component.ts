import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formGroup : FormGroup;
  constructor(private formBuilder : FormBuilder, private loginService: LoginService) {
  this.formGroup = this.formBuilder.group({

senha: ['',[Validators.required]],
email: ['',[Validators.required,Validators.email]],

  })

   }

  ngOnInit() {
  }
  logar(){
    this.loginService.insert(this.formGroup.value)
    .subscribe(response => {
      console.log("Logado Com Sucessoo");
    }, error =>{
      console.log("Erro ao Logar");
    })
    console.log(this.formGroup.value);
  }

}