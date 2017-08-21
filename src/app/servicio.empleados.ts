// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class ServicioEmpleadosComponent {

//     listaEmpleados: any;
//     constructor(private http: Http){
//          this.obtenerEmpleados().then(respuesta => this.listaEmpleados = respuesta);
//          console.log('Constructor repuesta:'+this.listaEmpleados);
//     }
//     obtenerEmpleados(){
//         console.log('Obteniendo Empleados:');
//         return this.http.get("https://jsonplaceholder.typicode.com/users")
//         .toPromise()
//         .then(respuesta => respuesta.json())
//         .catch(this.ocurrioUnError)

//     }


//     ocurrioUnError(error)
//     {
//         console.log("Ocurrio un error:", error);
//         return Promise.reject(error.message);
//     }   

//     obtenerEmpleadoPorId(id:number){
//         var resultado = null;
//         this.listaEmpleados.forEach(element => {
//             if(element.id == id) resultado = element;
//         });
//         return resultado;
//     }
// }
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Empleado} from './Empleado';

@Injectable()
export class ServicioEmpleadosComponent {

        info:any = {}; //informacion del sevicio que consume los datos del archivo json.
        cargada:boolean = false; //confirmar si ya cargo el servicio.
        cargada_json:boolean = false;
        listaEmpleados:any[] =[];
        empleado:any[] =[];
       // empleados = new Empleado();

        constructor( public http:Http ) {
          this.carga_datos();
        }
  
        public carga_datos(){
          this.http.get("https://jsonplaceholder.typicode.com/users").
            subscribe(data => {
            //console.log(data.json());
            this.cargada_json = true;
            this.listaEmpleados = data.json();
          })
        }

        public obtener_empleado(id:number){
          this.http.get("https://jsonplaceholder.typicode.com/users")
          .subscribe(data => {
                      console.log("Obteniendo empleado");
                      this.listaEmpleados = data.json();
                   
                      this.listaEmpleados.forEach(element => {
                          if(element.id == id) {
                              this.empleado = element;
                              console.log(this.empleado);
                             // console.log(this.empleados);
                             // this.empleados = element;
                              return this.empleado;
                          }
                        });
            })
      }
}