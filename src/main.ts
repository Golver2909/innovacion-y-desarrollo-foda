import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // 👈 ESTE es el correcto

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));