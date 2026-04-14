import { Component } from '@angular/core';
import { Consignaservice } from '../../services/consigna';
import { Consigna } from '../../models/consigna';
import { CardConsigna } from '../card-consigna/card-consigna';

@Component({
  selector: 'app-menu',
  imports: [CardConsigna],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  opciones:string[] = ["Fortaleza","Debilidad","Oportunidad","Amenaza"]

  posicion:number = 0

  consignas:Consigna[]

  constructor(servicioConsigna:Consignaservice){
    this.consignas = servicioConsigna.getConsignas()
  }

  toggleRespuesta(id: number): void {
    const consigna = this.consignas.find(c => c.id === id);
    if (consigna) {
      consigna.mostrarRespuesta = !consigna.mostrarRespuesta;
    }
  }

  cambiarContenido():void{
    this.posicion++

    if(this.posicion===this.consignas.length){
      this.posicion = 0
    }
  }
}
