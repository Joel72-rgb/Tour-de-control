import { Server } from '../model/server';
import { Alerte } from '../model/alerte';

export const serveurs: Server[] = [
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
];

export const alertes: Alerte[] = [
  {
    identifiant: 1,
    serverId: 1,
    message: 'Charge processeur elevee',
    gravite: 'moyenne',
    heure: '2026-10-26 08:30'
  },
  {
    identifiant: 2,
    serverId: 3,
    message: 'Serveur web hors ligne',
    gravite: 'critique',
    heure: '2026-10-26 08:45'
  },
  {
    identifiant: 3,
    serverId: 1,
    message: 'Seuil de charge depasse',
    gravite: 'critique',
    heure: '2026-10-26 09:00'
  },
  {
    identifiant: 4,
    serverId: 5,
    message: 'Espace de stockage a surveiller',
    gravite: 'moyenne',
    heure: '2026-10-26 09:15'
  },
  {
    identifiant: 5,
    serverId: 4,
    message: 'Verification de maintenance',
    gravite: 'faible',
    heure: '2026-10-26 09:30'
  }
];
