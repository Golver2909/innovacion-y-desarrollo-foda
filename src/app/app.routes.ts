import { Routes } from '@angular/router';
import { Inicial } from './pages/inicial/inicial';
import { ResultadoComponent } from './components/resultado/resultado';

export const routes: Routes = [
    {path: "",component:Inicial},
    {path: "/final",component:ResultadoComponent}
];
