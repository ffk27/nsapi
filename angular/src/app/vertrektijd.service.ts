import { Injectable } from '@angular/core';
import {Vertrektijd} from "./vertrektijd";
import {Http, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Station} from "./station";

@Injectable()
export class VertrektijdService {
  api = 'http://localhost:8012/https://www.rijdendetreinen.nl/ajax/vertrektijden';

  constructor(private http: Http) { }

  getVertrektijden(station: Station, sorteer = 'geplandvertrek'): Promise<[Vertrektijd]> {
    let params = new URLSearchParams();
    params.append('station', station.stationscode);
    params.append('sorteer', sorteer);
    return this.http.get(this.api, {search: params}).toPromise().then(res => {
      return res.json().vertrektijden as [Vertrektijd]
    })
      .catch(e => { return {error: e.status}; });
  }
}
