import { Injectable } from '@angular/core';
import {Station} from '../model/station';
import {Departure} from '../model/departure';
import {Treininfo} from '../model/treininfo';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TreininfoService {
  api = 'http://localhost:3000/api/treininfo';

  constructor(private http: HttpClient) { }

  getDrukte(station: Station, vertrektijd: Departure): Promise<Treininfo> {
    let params = new HttpParams();
    params = params.append('rit', vertrektijd.serviceNumber);
    const time = vertrektijd.getVertrektijd();

    params = params.append('tijd', vertrektijd.getDatum() + 'T' + time);
    params = params.append('vertrekstation', station.stationscode);

    return this.http.get<Treininfo>(this.api, {params: params}).toPromise().then();
  }
}
