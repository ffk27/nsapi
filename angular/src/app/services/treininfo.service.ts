import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {VertrektijdenComponent} from "../vertrektijden/vertrektijden.component";
import {Station} from "../model/station";
import {Departure} from "../model/departure";
import {Treininfo} from "../model/treininfo";

@Injectable()
export class TreininfoService {
  api = 'http://localhost:3000/api/treininfo';

  constructor(private http: Http) { }

  getDrukte(station: Station, vertrektijd: Departure): Promise<Treininfo> {
    let params = new URLSearchParams();
    params.append('rit', vertrektijd.serviceNumber);
    const departuredate = new Date(vertrektijd.departureTime);
    const time = VertrektijdenComponent.getVertrektijd(vertrektijd);
    const datum = departuredate.getFullYear() + '-'
      + VertrektijdenComponent.pad(departuredate.getMonth() + 1) + '-'
      + VertrektijdenComponent.pad(departuredate.getDate());
    params.append('tijd', datum + 'T' + time);
    params.append('vertrekstation', station.stationscode);

    return this.http.get(this.api, {search: params}).toPromise().then(res => {
      if (res.status === 204) {
        throw {error: 204};
      }
      return res.json() as Treininfo
    }).catch(e => {
        return {error: e.status};
    });
  }
}
