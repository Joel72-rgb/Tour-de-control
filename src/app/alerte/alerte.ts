import { Component, inject } from '@angular/core';
import { Supervision } from '../Service/supervision.service';

@Component({
  imports: [],
  selector: 'app-alerte',
  styleUrl: './alerte.css',
  templateUrl: './alerte.html',
})
export class Alerte {
  service = inject(Supervision);

  alertes = this.service.alertes;

  acquitterAlerte(id: number): void {
    this.service.acquit(id);
  }
}
