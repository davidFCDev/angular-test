import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Output() msjEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string = 'Anónimo';

  myStyle: object = {
    color: 'cyan',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  constructor() {}

  ngOnInit(): void {
    console.log('SaludoComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('SaludoComponent ngOnDestroy');
  }

  ngOnChanges(): void {
    console.log('SaludoComponent ngOnChanges');
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
