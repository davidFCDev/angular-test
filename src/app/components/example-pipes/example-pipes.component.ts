import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-pipes',
  templateUrl: './example-pipes.component.html',
  styleUrls: ['./example-pipes.component.css'],
})
export class ExamplePipesComponent implements OnInit {
  dob: Date = new Date(1990, 5, 20);
  change: boolean = true;
  name: string = 'John Doe';

  constructor() {}

  ngOnInit() {}

  get dateFormat() {
    return this.change ? 'shortDate' : 'fullDate';
  }

  changeFormat() {
    this.change = !this.change;
  }
}
