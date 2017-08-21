import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { ActivatedRoute } from '@angular/router'
import { ServicioEmpleadosComponent } from './servicio.empleados'
import {Empleado} from './Empleado';

@Component({
  selector: 'datosEmpleado',
  templateUrl: './datos.empleado.component.html',
  providers: [ServicioEmpleadosComponent]
})


export class DatosEmpleadosComponent {
  id: number;
  varEmpleado:any={};
  empleado = new Empleado();
  constructor(private activatedRoute: ActivatedRoute, private servicioEmpleado: ServicioEmpleadosComponent)
  {    
   
      this.id = this.activatedRoute.snapshot.params["id"];
      console.log("Enviando a buscar empleado por Id:"+this.id);
      //this.varEmpleado = servicioEmpleado.obtener_empleado(this.id);
      //this.empleado = new Empleado(servicioEmpleado.obtener_empleado(this.id));
      console.log("::::::::::::empleado: "+ servicioEmpleado.obtener_empleado(this.id));
  }
}

