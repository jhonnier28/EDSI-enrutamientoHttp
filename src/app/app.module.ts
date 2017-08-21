import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados.component';
import { DatosEmpleadosComponent } from './datos.empleado.component';

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
    HttpModule
  ],
  providers: [
    ServicioEmpleadosComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
