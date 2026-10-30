 import { computed, Service, signal } from '@angular/core';
 import { Server } from '../model/server';
 import { Alerte } from '../model/alerte';

 @Service()
 export class Supervision {
     serveurs = signal<Server[]>(
         [
             {
     identifiant: 1,
     nom: 'Serveur principal',
     region: 'Douala',
     chargeProcesseur: 85,
     enligne: true,
     etiquettes: ['Production', 'Linux']
   },
   {
     identifiant: 2,
     nom: 'Serveur sauvegarde',
     region: 'Yaounde',
     chargeProcesseur: 45,
     enligne: true,
     etiquettes: ['Sauvegarde', 'Linux']
   },
   {
     identifiant: 3,
     nom: 'Serveur web',
     region: 'Douala',
     chargeProcesseur: 100,
     enligne: false,
     etiquettes: ['Web', 'Production']
   },
   {
     identifiant: 4,
     nom: 'Serveur test',
     region: 'Bafoussam',
     chargeProcesseur: 20,
     enligne: true,
     etiquettes: ['Test', 'Developpement']
   },
   {
     identifiant: 5,
     nom: 'Serveur fichiers',
     region: 'Garoua',
     chargeProcesseur: 65,
     enligne: true,
     etiquettes: ['Fichiers', 'Stockage']
   }
         ]);

         alertes = signal<Alerte[]>([]);

         nombreServeurs = computed(
            () => this.serveurs().length
         );
        nombrePanne = computed(
            () => this.serveurs().filter(s => !s.enligne).length
         );
         chargemoyenne = computed(()=>{
            const liste = this.serveurs();

            if (liste.length === 0) return 0;

            return Math.round(
                liste.reduce((total, s) =>total + s.chargeProcesseur , 0)/liste.length
            );
         });

         tauxDispo = computed(() => {
         const liste = this.serveurs();

         if (liste.length === 0) return 0;

         return Math.round(
            liste.filter(s => s.enligne).length/liste.length *100
         );

         });

          private prochainIdAlerte(): number{

    return this.alertes().length === 0? 1 
    : Math.max(
        ...this.alertes().map(a => a.identifiant)

    ) +1;
  }
  private ajoutAlerte(
    serverId : number,
    message : string,
    gravite : Alerte['gravite']
  ): void{
    const nouvelleAlerte : Alerte ={
        identifiant : this.prochainIdAlerte(),
        serverId : serverId,
        message : message,
         gravite : gravite,
         heure : new Date().toLocaleString('fr-FR')

    };
    this.alertes.update(liste => [
        ...liste,
        nouvelleAlerte
    ]);
    
  }
  private determinerGravite(charge: number): Alerte['gravite'] {
  if (charge >= 80) {
    return 'critique';
  }

  if (charge >= 60) {
    return 'moyenne';
  }

  return 'faible';
}
  provoquer(identifiant: number): void{
    const serveur = this.serveurs().find(
        s => s.identifiant === identifiant
    );
    if (!serveur || !serveur.enligne){return;

    }
    this.serveurs.update(liste =>  liste.map(s => 
        s.identifiant === identifiant ? {
            ...s, enligne: false
        }: s
    ));

    this.ajoutAlerte(
        identifiant,
        'Serveur hors ligne ',
        'critique'
    );
  }
  redemarer(identifiant: number): void{
    this.serveurs.update(liste => liste.map(s => s.identifiant === identifiant
       ? {...s , enligne: true}
       :s 
    ));

  } 

  modif(identifiant: number, charge: number): void {
  const chargeVal = Math.max(0, Math.min(100, charge));

  const ancienServeur = this.serveurs().find(
    serveur => serveur.identifiant === identifiant
  );

  if (!ancienServeur) {
    return;
  }

  const ancienneGravite = this.determinerGravite(ancienServeur.chargeProcesseur);

 this.serveurs.update(liste =>
      liste.map(s => s.identifiant === identifiant
        ? { ...s, chargeProcesseur: chargeVal }
        : s)
  );

  const nouvelleGravite = this.determinerGravite(chargeVal);

  // Créer une alerte seulement si le serveur est en ligne,
  // si la charge atteint 60 %, et si le niveau a changé.
  if (
    ancienServeur.enligne &&
    chargeVal >= 60 &&
    nouvelleGravite !== ancienneGravite
  ) {
    this.ajoutAlerte(
      identifiant,
      `Charge CPU élevée : ${chargeVal} %`,
      nouvelleGravite
    );
  }
}

  acquit(identifiant: number): void{
    this.alertes.update(liste => liste.filter(a => a.identifiant 
        !== identifiant
    ));
  }

  suprimme(identifiant: number): void{
    this.serveurs.update( liste => liste.filter(s => s.identifiant
        !== identifiant
    ));

    this.alertes.update(liste => liste.filter(a => a.serverId !== identifiant));
  }
 
 }
 

   
