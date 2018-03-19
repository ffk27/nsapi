import { Injectable } from '@angular/core';
import {Departure} from "../model/departure";
import {Http, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Station} from "../model/station";

@Injectable()
export class DepartureService {
  api = 'http://localhost:8012/https://www.rijdendetreinen.nl/ajax/departures';

  constructor(private http: Http) { }

  getVertrektijden(station: Station): Promise<[Departure]> {
    let params = new URLSearchParams();
    params.append('station', station.stationscode);
    return this.http.get(this.api, {search: params}).toPromise().then(res => {
      return res.json().departures as [Departure]
    })
      .catch(e => { return {error: e.status}; });
  }
}
