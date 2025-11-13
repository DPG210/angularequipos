import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Equipo } from "../models/equipo";
import { Jugador } from "../models/jugador";
import { DatosEquipo } from "../models/datosequipo";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class ServiceFutbol {
    constructor(private _http: HttpClient) { }

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
        let request = "api/jugadores/jugadoresequipos/" + idEquipo;
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Array<Jugador>>(url);
    }

    findEquipo(idEquipo: number): Observable<Equipo> {
        let request = "api/equipos/" + idEquipo;
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Equipo>(url);
    }

    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/equipos";
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Array<Equipo>>(url);
    }

    getJugador(nombre: string): Observable<Jugador> {
        let request = "api/jugadores/buscarjugadores/" + nombre;
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Jugador>(url);
    }
}