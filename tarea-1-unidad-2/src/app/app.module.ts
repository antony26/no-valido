import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { NavigationBarComponent } from './componentes/navigation-bar/navigation-bar.component';
import { Ejercicio1Component } from './componentes/ejercicios/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './componentes/ejercicios/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './componentes/ejercicios/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './componentes/ejercicios/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './componentes/ejercicios/ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './componentes/ejercicios/ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './componentes/ejercicios/ejercicio7/ejercicio7.component';
import { Ejercicio8Component } from './componentes/ejercicios/ejercicio8/ejercicio8.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component,
    Ejercicio8Component
  ],
  imports: [
    BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
