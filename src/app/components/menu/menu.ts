import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  opciones:string[] = ["Fortaleza","Debilidad","Oportunidad","Amenaza"]

  posicion:number = 0

  mensajes:string[] = [
    "Componente Card",
    "Nuevo Mensaje",
    "Posicion 2 del arreglo"
  ]

  cambiarContenido():void{
    this.posicion++

    if(this.posicion===this.mensajes.length){
      this.posicion = 0
    }
  }
}
