import { Injectable } from '@angular/core';
import {Http, Jsonp, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Drukte} from "./drukte";
import {Vertrektijd} from "./vertrektijd";
import {Station} from "./station";

@Injectable()
export class TreindrukteService {
  api = 'http://localhost:8012/http://www.ns.nl/reisinfo-api/service/treindrukte';

  constructor(private jsonp: Jsonp, private http: Http) { }

  getDrukte(station: Station, vertrektijd: Vertrektijd): Promise<Drukte> {
    let params = new URLSearchParams();
    params.append('rit', vertrektijd.treinNr);
    const date = new Date(vertrektijd.werkelijkVertrekU * 1000);
    let datestring = date.getFullYear() + '-' + this.pad(date.getMonth() + 1) + '-' + this.pad(date.getDate());
    datestring += 'T' + vertrektijd.vertrek;
    params.append('tijd', datestring);
    params.append('vertrekstation', station.stationscode);

    return this.http.get(this.api, {search: params}).toPromise().then(res => res.json() as Drukte)
      .catch(e => {
        return {error: e.status};
      });

  }

  pad(number: number): string {
    if (number < 10) {
      return '0' + number;
    }
    return ''+number;
  }
}
