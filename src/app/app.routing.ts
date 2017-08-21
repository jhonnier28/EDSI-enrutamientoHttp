import { Routes, RouterModule} from '@angular/router';
import {  DatosEmpleadosComponent,
          EmpleadosComponent
       } from "./index.paginas";

const APP_ROUTES: Routes = [
    {path: 'empleados', component: EmpleadosComponent},
    {path: 'datosEmpleado/:id', component: DatosEmpleadosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'empleados'}
];
export const app_routing = RouterModule.forRoot(APP_ROUTES);