import { Injectable } from '@angular/core';
import {Station} from '../model/station';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StationService {
  api = 'http://localhost:3000/api/stations/';

  constructor(private http: HttpClient) { }

  getStations(q: string, countryCode = 'NL'): Promise<Station[]> {
    let params = new HttpParams();
    params = params.append('q', q);
    params = params.append('countryCode', countryCode);
    return this.http.get<Station[]>(this.api, {params: params}).toPromise();
  }
}
