import { Component, OnInit } from '@angular/core';

//Ejemplo básico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Definimos el formulario
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    // Iniciamos el formulario y sus valores por defecto
    this.myForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      email: [''],
      phone: [''],
      adress: [''],
    });

    // Nos suscribimos a los cambios del formulario
    this.myForm.valueChanges.subscribe(console.log);
  }

}
