import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css'],
})
export class ArrayFormComponent implements OnInit {

  myArrayForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myArrayForm = this.formBuilder.group({
      name: '',
      surname: '',
      phones: this.formBuilder.array([]), // Inicializamos la lista de teléfonos vacìa
    });
  }

  get phonesFormArray(): FormArray {
    return this.myArrayForm.get('phones') as FormArray;
  }
}
