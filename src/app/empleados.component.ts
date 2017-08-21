
    import {ServicioEmpleadosComponent} from './servicio.empleados';
  import {Router} from '@angular/router';
  import { Component } from '@angular/core';
  import { Http } from '@angular/http';
  import 'rxjs/add/operator/toPromise'
  
  @Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html',
    providers: [ServicioEmpleadosComponent]

  })
  export class EmpleadosComponent {
     listaEmpleados:any[] =[];
     constructor(public _is:ServicioEmpleadosComponent, private router: Router){
      }

    seleccionarEmpleado(empleado){
        console.log("Empleado seleccioando:"+empleado.id);
        this.router.navigate(['datosEmpleado', empleado.id]);
    }
  }
  

