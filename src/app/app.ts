import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuEquipos } from './components/menu-equipos/menu-equipos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuEquipos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularequipos');
}
