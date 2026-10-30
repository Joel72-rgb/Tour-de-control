import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Liste } from './liste/liste';
import { Alerte } from './alerte/alerte';

@Component({
  imports: [RouterOutlet,Dashboard,Liste,Alerte],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('espace-chantiers');
}
