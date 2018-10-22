import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {

  operando1: number;
  operando2: number;
  resultado: number;

  constructor() { }

  ngOnInit() {
    this.operando1 = 0;
    this.operando2 = 0;
  }

  calcular(operadores){
    this.resultado = operadores.operando1.value * operadores.operando2.value;
    return false;
  }

}
