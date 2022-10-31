import { Component } from '@angular/core';

import { UserService } from './services/user.service';
import { ShowNavService } from './services/show-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orion';

  mostrar: boolean = true;

  constructor(private showNav: ShowNavService) {}

  ngOnInit(){
    // this.showNav.mostrarMenuEmitter.subscribe(
    //   (item) => this.mostrar = item
    // );
  }

}
