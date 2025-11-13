import { Routes } from '@angular/router';
import { HomeEquipos } from './components/home-equipos/home-equipos';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { DetallesJugador } from './components/detalles-jugador/detalles-jugador';

export const routes: Routes = [
    { path: "", component: HomeEquipos },
    { path: "equipos/:idequipo", component: EquiposComponent },
    {path:"detalles/:nombre", component:DetallesJugador}
];
