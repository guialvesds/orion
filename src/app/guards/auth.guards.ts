import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

// Guarda de rotas
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  //Aqui vamos verificar se o usuário está autenticado e se não tiver, ele será redirecionado para pagina de login.

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ):  Observable<boolean>  | boolean {
    
      if(this.userService.usuarioAutenticado){
        return true;
      } 
      
      this.router.navigate(['/login']); // rota login
      return false;
  }
}
