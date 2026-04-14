import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Consigna } from '../../models/consigna';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-consigna',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './card-consigna.html',
  styleUrl: './card-consigna.css',
})
export class CardConsigna {
   @Input({ required: true }) consigna!: Consigna;
  @Output() toggleRespuesta = new EventEmitter<number>();

  onToggleRespuesta(): void {
    this.toggleRespuesta.emit(this.consigna.id);
  }
}
