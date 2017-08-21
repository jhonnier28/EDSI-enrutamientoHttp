import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {

    listaEmpleados: any;
    constructor(private http: Http){
        this.obtenerEmpleados().then(respuesta => this.listaEmpleados = respuesta);
    }
    obtenerEmpleados(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
        .toPromise()
        .then(respuesta => respuesta.json())
        .catch(this.ocurrioUnError)
    }

    ocurrioUnError(error)
    {
        console.log("Ocurrio un error:", error);
        return Promise.reject(error.message);
    }

    seleccionarEmpleado(empleado)
    {
       // this.router.navigate(['materias',estudiante.id]);
       console.info(empleado);
    }
}


