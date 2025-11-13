import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceFutbol } from '../../services/service.futbol';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-menu-equipos',
  imports: [RouterModule],
  templateUrl: './menu-equipos.html',
  styleUrl: './menu-equipos.css',
})
export class MenuEquipos implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(private _service: ServiceFutbol) {
    this.equipos = [];
  }

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    })
  }
}
