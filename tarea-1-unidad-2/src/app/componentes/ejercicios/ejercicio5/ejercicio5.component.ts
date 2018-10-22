import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {

  productos: Producto[];
  precio: number;

  constructor() { }

  ngOnInit() {
    this.productos = [
        {nombre: 'Pirufio X62', precio: 2},
        {nombre: 'Pintura Verde', precio: 53}
    ];

    this.precio = 0;
  }

  cambioProductoHandler(evento){
    this.precio = evento.target.value;
  }

}

interface Producto {
    nombre: string;
    precio: number;
}
