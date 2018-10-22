import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  frase: string;
  fraseInvertida: string;

  constructor() { }

  ngOnInit() {
    this.frase = "";
    this.reverse(this.frase);
  }

  cambioDeFraseHandler(event){
    this.reverse(event.target.value)
  }

    reverse(str:string) {
        this.fraseInvertida =  str.split('').reverse().join('');
    }
}
