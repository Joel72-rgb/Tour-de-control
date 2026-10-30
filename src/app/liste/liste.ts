import { Component, inject} from '@angular/core';
import { Supervision } from '../Service/supervision.service';

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.css',
  templateUrl: './liste.html',
})
export class Liste {
  service = inject(Supervision);

  serveurs = this.service.serveurs;

   provoquerPanne(id: number): void {
    this.service.provoquer(id);
  }

  redemarrerServeur(id: number): void {
    this.service.redemarer(id);
  }

  modifierCharge(id: number, charge: number): void {
    this.service.modif(id, charge);
  }

  supprimerServeur(id: number): void {
    this.service.suprimme(id);
  }
}
