export class Vertrektijd {
  status: string;
  via: string;
  bestemming: string;
  vleugels: [{
    bestemming: string;
    mat: [[string]]
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
  opmerkingen: [any];
  tips: [any];
  id: string;
  werkelijkVertrekU: number;
  aftelTijd: number;
  werkelijkVertrek: string;

  getMaterieel(): string {
    let materieel = '';
    for (let vleugel of this.vleugels) {
      for (let mat of vleugel.mat) {
        materieel += mat[0] + ' ';
      }
    }
    return materieel;
  }
}
