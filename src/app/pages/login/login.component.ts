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

  validation: boolean = false;
  validationButton: boolean = false;
  autenticado: boolean = false;
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
  }

  submit() {
    this.UserServices.getUsers().subscribe((item) => {
      const data = item.data;

      this.users = data;

      const teste = {
        name: 'teste@teste.com',
        senha: '1234',
      };

      if (
        this.formulario.value.email == teste.name &&
        this.formulario.value.password == teste.senha
        // this.formulario.value.email !== null &&
        // this.formulario.value.password !== null
      ) {
        // this.showNav.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
        this.authService.usuarioAutenticado = true;
        this.authService.mostraMenu.emit(true);
        console.log('Login realizado com sucesso!');
        console.log(this.authService.usuarioAutenticado);
      } else {
        // this.showNav.mostrarMenuEmitter.emit(false);
        this.authService.usuarioAutenticado = false;
        this.authService.mostraMenu.emit(false);
        console.log('Erro ao realziar login!');
        console.log(this.authService.usuarioAutenticado);
      }

      // for (let usuario of this.users) {
      //   if (
      //     this.formulario.value.email == usuario.email &&
      //     this.formulario.value.password == usuario.password
      //     // this.formulario.value.email !== null &&
      //     // this.formulario.value.password !== null
      //   ) {
      //     // this.showNav.mostrarMenuEmitter.emit(true);
      //     this.router.navigate(['/']);
      //     this.authService.usuarioAutenticado = true;
      //     this.authService.mostraMenu.emit(true);
      //     console.log('Login realizado com sucesso!');
      //     console.log(this.authService.usuarioAutenticado);

      //   } else {
      //     // this.showNav.mostrarMenuEmitter.emit(false);
      //     this.authService.usuarioAutenticado = false;
      //     this.authService.mostraMenu.emit(false);
      //     console.log('Erro ao realziar login!');
      //     console.log(this.authService.usuarioAutenticado);
      //   }

      //   if (
      //     this.formulario.value.email !== usuario.email &&
      //     this.formulario.value.email !== null
      //   ) {
      //     this.validation = true;
      //   }
      //   if (
      //     this.formulario.value.email == null &&
      //     this.formulario.value.password == null
      //   ) {
      //     this.validationButton = true;
      //   }
      // }
    });

    console.log(this.authService.usuarioAutenticado);
  }
}
