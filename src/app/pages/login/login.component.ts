import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { ShowNavService } from 'src/app/services/show-nav.service';

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

  constructor(
    private UserServices: UserService,
    private router: Router,
    private formBuild: FormBuilder,
    private showNav: ShowNavService
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

      for (let usuario of this.users) {
        if (
          this.formulario.value.email == usuario.email &&
          this.formulario.value.password == usuario.password &&
          this.formulario.value.email !== null &&
          this.formulario.value.password !== null
        ) {
          // this.UserServices.usuarioAutenticado = true;
          // this.showNav.mostrarMenuEmitter.emit(true);
          this.router.navigate(['/']);
          console.log('Login realizado com sucesso!');
        } else {
          // this.UserServices.usuarioAutenticado = false;
          // this.showNav.mostrarMenuEmitter.emit(false);
          console.log('Erro ao realziar login!');
        }

        if (
          this.formulario.value.email !== usuario.email &&
          this.formulario.value.email !== null
        ) {
          this.validation = true;
        }
        if (
          this.formulario.value.email == null &&
          this.formulario.value.password == null
        ) {
          this.validationButton = true;
        }
      }
    });
  }
}
