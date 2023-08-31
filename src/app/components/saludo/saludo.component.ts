import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  @Output() msjEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string = 'Anónimo';

  constructor() {}

  ngOnInit(): void {
    console.log('SaludoComponent ngOnInit');
  }

  /*
   * Ejemplo para controlar evento de tipo click en el DOM y enviar un texto a componente padre
   */

  sendMsj(): void {
    this.msjEmitter.emit(
      `Hola ${this.name}. Alerta disparada por evento click`
    );
  }
}
