import { Component, OnInit } from '@angular/core';
import { ServiceFutbol } from '../../services/service.futbol';
import { DatosEquipo } from '../../models/datosequipo';
import { Params, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-equipos-component',
  imports: [],
  templateUrl: './equipos-component.html',
  styleUrl: './equipos-component.css',
})
export class EquiposComponent implements OnInit {

  public datosEquipo!: DatosEquipo;

  public cargando: boolean = true;

  constructor(private _service: ServiceFutbol,
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((param: Params) => {
      let id = parseInt(param['idequipo']);

      this.cargando = true;

      let equipo$ = this._service.findEquipo(id);
      let jugadores$ = this._service.getJugadoresEquipo(id);

      forkJoin({
        equipo: equipo$,
        jugadores: jugadores$
      }).subscribe(response => {
        const datosCompletos = new DatosEquipo();
        datosCompletos.equipo = response.equipo;
        datosCompletos.jugadores = response.jugadores;

        this.cargando = false;

        this.datosEquipo = datosCompletos;

      }
      )

    })

  }
}
