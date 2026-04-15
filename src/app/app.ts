
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Consigna } from './models/consigna';
import { Consignaservice } from './services/consigna';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Inicial } from './pages/inicial/inicial';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,Inicial],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('innovacion-y-desarrollo');
  
  consignas: Consigna[] = [];
  cantidadTotal = 0;

  constructor(private consignaService: Consignaservice) {}

  ngOnInit(): void {
    this.cargarConsignas();
  }

  cargarConsignas(): void {
    this.consignas = this.consignaService.getConsignas();
    this.cantidadTotal = this.consignaService.getTodasLasConsignas().length;
  }

  actualizarConsignas(): void {
    this.consignaService.actualizarConsignas();
    this.cargarConsignas();
  }
  
  /* toggleRespuesta(id: boolean): void {
    const consigna = this.consignas.find(c => c.id === id);
    if (consigna) {
      consigna.mostrarRespuesta = !consigna.mostrarRespuesta;
    }
  } */
}

