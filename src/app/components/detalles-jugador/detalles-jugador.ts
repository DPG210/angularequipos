import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { Params, ActivatedRoute } from '@angular/router';
import { ServiceFutbol } from '../../services/service.futbol';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles-jugador',
  imports: [],
  templateUrl: './detalles-jugador.html',
  styleUrl: './detalles-jugador.css',
})
export class DetallesJugador implements OnInit{
  public jugadores!:Jugador;

  constructor(
    private _service:ServiceFutbol,
    private _activateRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((param:Params)=>{
      let nombre= param["nombre"];
      this._service.getJugador(nombre).subscribe(response=>{
        this.jugadores=response;
      })
    })
  }

}
