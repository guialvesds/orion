import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public usuarioAutenticado: boolean = false;
 public mostraMenu = new EventEmitter<boolean>();

  constructor() { }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
