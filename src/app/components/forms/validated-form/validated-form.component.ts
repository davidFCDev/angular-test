import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.css'],
})
export class ValidatedFormComponent implements OnInit {
  myValidatedForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myValidatedForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: '',
      email: ['', Validators.compose([Validators.required, Validators.email])],
      age: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(65),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ]),
      ],
      accept: ['', Validators.requiredTrue],
    });
  }

  get name() {
    return this.myValidatedForm.get('name');
  }

  get surname() {
    return this.myValidatedForm.get('surname');
  }

  get email() {
    return this.myValidatedForm.get('email');
  }

  get age() {
    return this.myValidatedForm.get('age');
  }

  get password() {
    return this.myValidatedForm.get('password');
  }

  get accept() {
    return this.myValidatedForm.get('accept');
  }

  sendForm() {
    if (this.myValidatedForm.valid) {
      console.log('Form is valid');
      this.myValidatedForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
