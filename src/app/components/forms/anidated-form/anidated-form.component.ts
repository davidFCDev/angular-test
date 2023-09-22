import { Component, OnInit } from '@angular/core';

// Importamos de ReactiveForms para crear un formulario anidado
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-anidated-form',
  templateUrl: './anidated-form.component.html',
  styleUrls: ['./anidated-form.component.css'],
})
export class AnidatedFormComponent implements OnInit {
  myAnidatedForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Agrupación para teléfono
    const fixedPhone = this.formBuilder.group({
      prefix: '',
      number: '',
    });
    const mobilePhone = this.formBuilder.group({
      prefix: '',
      number: '',
    });

    // Agrupacion del formulario
    this.myAnidatedForm = this.formBuilder.group({
      fixedPhone: fixedPhone,
      mobilePhone: mobilePhone,
    });
  }
}
