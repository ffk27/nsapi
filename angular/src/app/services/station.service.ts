import { Injectable } from '@angular/core';
import {Station} from "../model/station";
import {Http, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StationService {
  api = 'http://localhost:3000/api/stations/';

  constructor(private http: Http) { }

  getStations(q: string, countryCode = 'NL'): Promise<[Station]> {
    let params = new URLSearchParams();
    params.append('q', q);
    params.append('countryCode', countryCode);
    return this.http.get(this.api, {search: params}).toPromise().then(res => res.json() as [Station])
      .catch(e => { return {error: e.status}; });
  }
}
