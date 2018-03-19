<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Drukte} from "../model/drukte";
import {Departure} from "../model/departure";
import {Station} from "../model/station";
import {VertrektijdenComponent} from "../vertrektijden/vertrektijden.component";

@Injectable()
export class TreindrukteService {
  api = 'http://localhost:3000/api/treindrukte';

  constructor(private http: Http) { }

  getDrukte(station: Station, vertrektijd: Departure): Promise<Drukte> {
    let params = new URLSearchParams();
    params.append('rit', vertrektijd.serviceNumber);
    const departuredate = new Date(vertrektijd.departureTime);
    const time = VertrektijdenComponent.getVertrektijd(vertrektijd);
    const datum = departuredate.getFullYear() + '-'
      + VertrektijdenComponent.pad(departuredate.getMonth() + 1) + '-'
      + VertrektijdenComponent.pad(departuredate.getDate());
    console.log(datum + 'T' + time);
    params.append('tijd', datum + 'T' + time);
    params.append('vertrekstation', station.stationscode);

    return this.http.get(this.api, {search: params}).toPromise().then(res => {
      if (res.status === 204) {
        throw {error: 204};
      }
      return res.json() as Drukte
    })
      .catch(e => {
        return {error: e.status};
      });
  }
}
=======
import { Injectable } from '@angular/core';
import {Http, Jsonp, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Drukte} from "../model/drukte";
import {Departure} from "../model/departure";
import {Station} from "../model/station";

@Injectable()
export class TreindrukteService {
  api = 'http://localhost:8012/http://www.ns.nl/reisinfo-api/service/treindrukte';

  constructor(private jsonp: Jsonp, private http: Http) { }

  getDrukte(station: Station, vertrektijd: Departure): Promise<Drukte> {
    let params = new URLSearchParams();
    params.append('rit', vertrektijd.serviceNumber);
    const date = new Date(vertrektijd.departureTime).toISOString().split(':');
    params.append('tijd', date[0] + ':' + date[1]);
    params.append('vertrekstation', station.stationscode);

    return this.http.get(this.api, {search: params}).toPromise().then(res => {
      if (res.status === 204) {
        throw {error: 204};
      }
      return res.json() as Drukte
    })
      .catch(e => {
        return {error: e.status};
      });
  }
}
>>>>>>> 5c089588b9135710fa0d6d72fa98b46389e34709
