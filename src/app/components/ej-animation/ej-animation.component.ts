import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-ej-animation',
  templateUrl: './ej-animation.component.html',
  styleUrls: ['./ej-animation.component.css'],
  // Metadatos para animacion de componente
  animations: [
    trigger('animaciones', [
      state('inicial', style({ backgroundColor: 'red' })),
      state('final', style({ backgroundColor: 'orange' })),
      state('subiendo', style({ transform: 'translateY(-100%)' })),
      state('bajando', style({ transform: 'translateY(100%)' })),
      transition('inicial => final', animate('1000ms ease-in')),
      transition('final => inicial', animate('1000ms ease-out')),
    ]),
  ],
})
export class EjAnimationComponent implements OnInit {
  state: string = 'inicial';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      if (this.state === 'inicial') {
        this.state = 'final';
      } else {
        this.state = 'inicial';
      }
    }, 1000);
  }

  subir() {
    this.state = 'subiendo';
  }

  bajar() {
    this.state = 'bajando';
  }
}
