export interface Alerte {
    identifiant : number;
    serverId : number;
    message : string;
    gravite : 'faible' | 'moyenne' | 'critique';
    heure : string;
}
