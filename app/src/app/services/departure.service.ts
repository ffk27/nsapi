import { Injectable } from '@angular/core';
import { Departure } from '../model/departure';
import { URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams } from "@angular/common/http";
import * as $ from 'jquery';
import 'rxjs/add/operator/toPromise';
import { Station } from '../model/station';

@Injectable()
export class DepartureService {
  api = 'http://localhost:3000/api/departures';

  constructor(private http: HttpClient) { }

  getVertrektijden(station: Station): Promise<Departure[]> {
    let params = new HttpParams();
    params = params.append('station', station.stationscode);
    return this.http.get<any>(this.api, { params: params }).toPromise().then(res => {
      const departures = [];
      for (let i=0; i<res.departures.length; i++) {
        departures.push($.extend(new Departure(), res.departures[i]));
      }
      return departures;
    });
  }
}
