import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component implements OnInit {

    fahrenheit: number;
    celcius: number;

  constructor() { }

  ngOnInit() {
    this.fahrenheit =  0;
    this.celcius = 0;
  }

    calcularFahrenheit(evento) {
    let gradosFahrenheit = evento.target.value;
          this.fahrenheit = (gradosFahrenheit * 1.8) + 32;
    }

    calcularCelcius(evento){
    let gradosFahrenheit = evento.target.value;
      this.celcius = (( gradosFahrenheit-32 )*5)/9;
    }
}
