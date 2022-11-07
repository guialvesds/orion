import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // recebe as informações do formulário
  formulario!: FormGroup;
  users: User[] = [];

  userLogado!: any;

  validation: boolean = false;
  validationButton: boolean = false;
  autenticado: boolean = false;

  validationText: string = '';
  constructor(
    private UserServices: UserService,
    private router: Router,
    private formBuild: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    //Referenciando cad campo do formulário
    this.formulario = this.formBuild.group({
      email: [null],
      password: [null],
    });

    this.UserServices.getUsers().subscribe((item) => {
      const data = item.data;

      this.users = data;
      
    });
  }

  submit() {
    this.UserServices.getUsers().subscribe((item) => {
      const data = item.data;

      this.users = data;

      const index: number = 0;

      while (index < this.users.length) {
        this.users.filter((item) => {
         
          if (
            item.email === this.formulario.value.email &&
            item.password === this.formulario.value.password
          ) {
            this.router.navigate(['/']);
            this.authService.usuarioAutenticado = true;
            this.authService.mostraMenu.emit(true);            
          }
          if (
            item.email !== this.formulario.value.email &&
            item.password !== this.formulario.value.password
          ) {
            this.validationText = 'E-mail ou senha inválido.';
            this.validation = true;
          }
        });

        return;

        
      }
    });
  
  }
}
