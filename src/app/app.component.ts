import { Component } from '@angular/core';
import { ServicioEmpleadosComponent } from "./servicio.empleados";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _is:ServicioEmpleadosComponent ){
   
 }
}
