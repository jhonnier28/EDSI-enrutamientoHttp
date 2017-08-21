import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados.component';
import { DatosEmpleadosComponent } from './datos.empleado.component';
import { app_routing }  from './app.routing';

//Servicios
import { ServicioEmpleadosComponent } from "./servicio.empleados";


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    DatosEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    ServicioEmpleadosComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
