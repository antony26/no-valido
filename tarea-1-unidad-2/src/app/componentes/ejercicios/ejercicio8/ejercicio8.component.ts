import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.component.html',
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component implements OnInit {

  rotulo: string;
  constructor() { }

  ngOnInit() {
    this.rotulo = "Fecha es invalida"
  }

  validarFecha(evento){
    let fechaInput = evento.target.value;
    if(this.fechaEsValida(fechaInput)) {
      let objetoFecha = new Date(fechaInput);
      let dia = objetoFecha.getDay();
      let mes = objetoFecha.getMonth()+1;
      let anio = objetoFecha.getFullYear();

      this.rotulo = mes+"-"+dia+"-"+anio;
    }else {
      this.rotulo = "Fecha es invalida";
    }
  }


    fechaEsValida(fechaInput){
        const RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

        return (fechaInput.length && RegExPattern.test(fechaInput))
    }
}
