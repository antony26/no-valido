import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './componentes/ejercicios/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './componentes/ejercicios/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './componentes/ejercicios/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './componentes/ejercicios/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './componentes/ejercicios/ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './componentes/ejercicios/ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './componentes/ejercicios/ejercicio7/ejercicio7.component';
import { Ejercicio8Component } from './componentes/ejercicios/ejercicio8/ejercicio8.component';

const routes: Routes=[
    {path: 'ejercicio1', component: Ejercicio1Component},
    {path: 'ejercicio2', component: Ejercicio2Component},
    {path: 'ejercicio3', component: Ejercicio3Component},
    {path: 'ejercicio4', component: Ejercicio4Component},
    {path: 'ejercicio5', component: Ejercicio5Component},
    {path: 'ejercicio6', component: Ejercicio6Component},
    {path: 'ejercicio7', component: Ejercicio7Component},
    {path: 'ejercicio8', component: Ejercicio8Component}
    ];

@NgModule({
    exports: [ RouterModule ],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}