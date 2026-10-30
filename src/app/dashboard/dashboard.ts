import { Component, inject } from '@angular/core';
import { Supervision } from '../Service/supervision.service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  supervision = inject(Supervision);
  nombreSer = 
  this.supervision.nombreServeurs;
  nombrepanne = 
  this.supervision.nombrePanne;
  chargeMoy = 
  this.supervision.chargemoyenne;
  taux = 
  this.supervision.tauxDispo;
}
