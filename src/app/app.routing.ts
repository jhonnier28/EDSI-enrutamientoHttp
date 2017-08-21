import {Routes, RouterModule} from '@angular/router';
import { EmpleadosComponent }  from './empleados.component';
// import { MateriasComponent }  from './materias.component';

const APP_ROUTES: Routes = [
    {path: 'empleados', component: EmpleadosComponent},
    // {path: 'materias/:id', component: MateriasComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);