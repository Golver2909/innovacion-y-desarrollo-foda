import { Component, EventEmitter, Output } from '@angular/core';
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
  numeroConsigna: number = 1

  consignasIncorrectas:Consigna[] = []
  consignas:Consigna[]

  constructor(public servicioConsigna:Consignaservice){
    this.consignas = servicioConsigna.getConsignas()
  }

  /* onToggleRespuesta(): void {
    this.toggleRespuesta.emit(this.consigna.id);
  } */

  responder(respuesta:string):void{

    if(respuesta===this.consignas[this.posicion].respuesta){
      this.servicioConsigna.consignasCorrectas++
    }else{
      this.consignasIncorrectas.push(this.consignas[this.posicion])
    }

    this.posicion++
    this.numeroConsigna++

    if(this.posicion===this.consignas.length){
      console.log(this.consignasIncorrectas, this.servicioConsigna.consignasCorrectas)

      this.posicion = 0
      this.numeroConsigna=1

      this.servicioConsigna.consignasIncorrectas = this.consignasIncorrectas
    }
  }
}
