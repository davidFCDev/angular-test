import { NgModule, LOCALE_ID } from '@angular/core';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExamplePipesComponent } from './components/example-pipes/example-pipes.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { CalculatePointsPipe } from './pipes/calculate-points.pipe';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

// Registramos el locale de ES para que los PIPES salgan en español
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    FormComponent,
    AnidatedFormComponent,
    ArrayFormComponent,
    ValidatedFormComponent,
    ExamplePipesComponent,
    MultiplyPipe,
    CalculatePointsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [
    // Registramos el locale de ES para que los PIPES salgan en español
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
