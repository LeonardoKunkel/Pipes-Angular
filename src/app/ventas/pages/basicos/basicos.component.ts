import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'leonardo';
  nombreUpper: string = 'BRAVO';
  nombreCompleto: string = 'lEoNaRdO bRaVo';

  fecha: Date = new Date(); // el día de hoy

}
