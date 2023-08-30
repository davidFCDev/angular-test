import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {

  name: string = 'David';

  constructor() {

  }

  ngOnInit(): void {
    console.log('SaludoComponent ngOnInit');
  }
}
