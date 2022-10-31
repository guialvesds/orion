import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowNavService {

  showNav!: boolean;

  constructor() { }

  mostrarMenuEmitter = new EventEmitter<boolean>(); // emissão de evento
}
