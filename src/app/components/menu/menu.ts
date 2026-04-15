import { Component, EventEmitter, Output } from '@angular/core';
import { Consignaservice } from '../../services/consigna';
import { Consigna } from '../../models/consigna';
import { CardConsigna } from '../card-consigna/card-consigna';
import { ResultadoComponent } from '../resultado/resultado';

@Component({
  selector: 'app-menu',
  imports: [CardConsigna, ResultadoComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  opciones:string[] = ["Fortaleza","Debilidad","Oportunidad","Amenaza"]

  mostrarFinal:boolean = false

  posicion:number = 0
  numeroConsigna: number = 1
  consignasCorrectas:number = 0

  consignasIncorrectas:Consigna[] = []
  consignas:Consigna[]

  constructor(public servicioConsigna:Consignaservice){
    this.consignas = servicioConsigna.getConsignas()
  }

  /* onToggleRespuesta(): void {
    this.toggleRespuesta.emit(this.consigna.id);
  } */

  reinicio():void{
    
    this.posicion = 0
    this.numeroConsigna = 1

    this.servicioConsigna.actualizarConsignas()

    this.consignas = this.servicioConsigna.getConsignas()

    this.mostrarFinal=false
  }

  responder(respuesta:string):void{

    if(respuesta===this.consignas[this.posicion].respuesta){
      this.consignasCorrectas++
    }else{
      this.consignasIncorrectas.push(this.consignas[this.posicion])
    }

    this.posicion++
    this.numeroConsigna++

  

    if(this.posicion===this.consignas.length){
      console.log(this.consignasIncorrectas, this.servicioConsigna.consignasCorrectas)

      this.servicioConsigna.consignasIncorrectas = this.consignasIncorrectas

      this.mostrarFinal = true

    }
  }
}
