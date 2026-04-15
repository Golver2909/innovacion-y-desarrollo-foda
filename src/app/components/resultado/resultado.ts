import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consignaservice } from '../../services/consigna';
import { Consigna } from '../../models/consigna';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado.html',
  styleUrls: ['./resultado.css']
})
export class ResultadoComponent {

  @Input({ required: true }) puntaje!: number;

  @Input({ required: true }) resultados!: Consigna[];

  constructor(public servicioConsigna:Consignaservice){
    
  }

  obtenerMensaje(): string {
    if (this.puntaje === 10) return 'Excelente';
    if (this.puntaje >= 7) return 'Muy bien';
    if (this.puntaje >= 5) return 'Regular';
    return 'Seguí estudiando';
  }

  // Opcional: explicaciones de errores
  explicaciones: { [key: number]: string } = {
    1: 'La respuesta correcta era X porque...',
    2: 'Te faltó considerar este punto...',
    3: 'Error conceptual en este tema...'
  };

}