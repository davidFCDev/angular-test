import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../../models/player.interface';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-example-pipes',
  templateUrl: './example-pipes.component.html',
  styleUrls: ['./example-pipes.component.css'],
})
export class ExamplePipesComponent implements OnInit {
  dob: Date = new Date(1990, 5, 20);
  change: boolean = true;
  name: string = 'John Doe';
  PI_NUMBER: number = Math.PI;
  money: number = 1234.5;
  percentage: number = 0.234;
  longText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
  contact: IContact = {
    id: 1,
    name: 'John Doe',
    surname: 'Doe',
    age: 30,
    email: 'jhon@gmail.com',
  };
  // Ejemplo para calcular puntos de un jugador
  player1: IPlayer = {
    name: 'John',
    points: [31, 40, 55, 60, 75, 80, 95, 100],
  };
  player2: IPlayer = {
    name: 'Jane',
    points: [34, 42, 50, 68, 70, 88, 98, 100],
  };

  constructor() {}

  ngOnInit() {}

  get dateFormat() {
    return this.change ? 'shortDate' : 'fullDate';
  }

  changeFormat() {
    this.change = !this.change;
  }
}
