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
      state('final', style({ backgroundColor: 'blue' })),
      transition('inicial => final', animate('1000ms ease-in')),
      transition('final => inicial', animate('1000ms ease-out')),
    ]),
  ],
})
export class EjAnimationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
