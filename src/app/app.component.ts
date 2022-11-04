import { Component } from '@angular/core';

import { UserService } from './services/user.service';
import { ShowNavService } from './services/show-nav.service';
import { AuthService } from './pages/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orion';

  mostrar: boolean = false;

  constructor(private showNav: ShowNavService,
             public authService: AuthService,
             private router: Router) {}

  ngOnInit(){
   this.authService.mostraMenu.subscribe(
    exibir => this.mostrar = exibir
   );
  }

  sair(){
    this.authService.usuarioAutenticado = false;
    this.authService.mostraMenu.emit(false);
    this.router.navigate(['/login']);
  }

}
