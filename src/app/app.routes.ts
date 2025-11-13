import { Routes } from '@angular/router';
import { HomeEquipos } from './components/home-equipos/home-equipos';
import { EquiposComponent } from './components/equipos-component/equipos-component';

export const routes: Routes = [
    { path: "", component: HomeEquipos },
    { path: "equipos/:idequipo", component: EquiposComponent }
];
