import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HolaMundo';
  user = '@paco';

  // Se ejecueta cuando en el hijo se pulse el botón
  getMsj(event: string): void {
    alert(event);
  }
}
