import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {
  fecha: string;
  rotulo: string;

  constructor() { }

  ngOnInit() {
    this.fecha = '';
    this.rotulo = 'Fecha Invalida';
  }

  validarFecha(fechaInput){
      const RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      this.fecha = fechaInput.target.value;
      if (this.fecha.length && RegExPattern.test(this.fecha)){
        let hoy = new Date();
        let objetoFecha = new Date(this.fecha);

        let dias = this.dias_entre_fechas(hoy,objetoFecha);

        this.rotulo = "Pasaron "+ dias+" dias";
      }
      else{
          this.rotulo = "No es una fecha valida";
      }
  }

    dias_entre_fechas(fecha1, fecha2) {
        let ONE_DAY = 1000 * 60 * 60 * 24;
        
        let fecha1_ms = fecha1.getTime();
        let fecha2_ms = fecha2.getTime();
        
        let difference_ms = Math.abs(fecha1_ms - fecha2_ms);

        return Math.round(difference_ms/ONE_DAY);

    }
}
