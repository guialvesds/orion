import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from 'src/app/model/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  formulario!: FormGroup;
  users: User[] = [];
  validation: boolean = false;
  passValidation: boolean = false;

  constructor(
    private formBuild: FormBuilder,
    private router: Router,
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuild.group({
      name: [null],
      email: [null],
      password: [null],
      rPassword: [null],
    });
  }

  async submit() {
    this.userServices.getUsers().subscribe((item) => {
      const data = item.data;
      this.users = data;
    });

    for (let usuario of this.users) {
      if (this.formulario.value.email === usuario.email) {
        console.log('Usuário já cadastrado!');
      } else if (
        this.formulario.value.name == null &&
        this.formulario.value.email == null &&
        this.formulario.value.password == null
      ) {
        this.validation = true;
        console.log('Todos os campos são obrigatórios!');
      } else if (
        this.formulario.value.password !== this.formulario.value.rPassword
      ) {
        this.passValidation = true;
        console.log('Senhas não conferem!');
      } else {
        await this.userServices.creatUser(this.formulario.value).subscribe();

        console.log('Usuário cadastrado com sucesso!');

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    }
  }
}
