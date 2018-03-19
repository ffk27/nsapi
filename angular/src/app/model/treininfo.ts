import {Materieel} from "./materieel";

export class Treininfo {
  info: [{
    vertrektijd: string;
    ritnummer: number;
    station: string;
    vervoerder: string;
    ingekort: boolean;
    lengte: number;
    geplandeLengte: number;
    materieeldelen: [{materieelnummer: number, mat: Materieel}];
    geplandeMaterieeldelen: [{materieelnummer: number, mat: Materieel}];
  }];
}
