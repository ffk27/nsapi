export class Vertrektijd {
  status: string;
  via: string;
  bestemming: string;
  vleugels: [{
    bestemming: string;
    mat: [any]
  }];
  vervoerder: string;
  spoor: string;
  treinNr: string;
  soort: string;
  vertraging: number;
  soortAfk: string;
  opgeheven: boolean;
  vertrek: string;
  sprWijziging:boolean;
  // opmerkingen[];
  // tips[];
  id: string;
  werkelijkVertrekU: number;
  aftelTijd: number;
  werkelijkVertrek: string;
}

