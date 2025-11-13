import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { ServiceFutbol } from '../../services/service.futbol';
import { Equipo } from '../../models/equipo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-menu-equipos',
  imports: [RouterModule, FormsModule],
  templateUrl: './menu-equipos.html',
  styleUrl: './menu-equipos.css',
})
export class MenuEquipos implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(
    private _service: ServiceFutbol,
    private _router:Router
  ) {
    this.equipos = [];
  }

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    })
  }

  buscarJugador():void{
    this._router.navigate("['detalles',]")
  }

}
