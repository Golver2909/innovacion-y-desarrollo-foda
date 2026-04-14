import { Component } from '@angular/core';
import { ResultadoComponent } from './resultado/resultado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResultadoComponent],
  templateUrl: './app.html'
})
export class AppComponent { }