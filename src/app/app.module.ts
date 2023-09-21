import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/forms/form/form.component';
import { AnidatedFormComponent } from './components/forms/anidated-form/anidated-form.component';
import { ArrayFormComponent } from './components/forms/array-form/array-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidatedFormComponent } from './components/forms/validated-form/validated-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    FormComponent,
    AnidatedFormComponent,
    ArrayFormComponent,
    ValidatedFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
