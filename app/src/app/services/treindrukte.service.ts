import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import {Drukte} from "../model/drukte";
import {Departure} from "../model/departure";
import {Station} from "../model/station";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TreindrukteService {
  api = 'http://localhost:3000/api/treindrukte';

  constructor(private http: HttpClient) { }

  getDrukte(station: Station, vertrektijd: Departure): Promise<Drukte> {
    let params = new HttpParams();
    params = params.append('rit', vertrektijd.serviceNumber);
    
    params = params.append('tijd', vertrektijd.getDatum() + 'T' + vertrektijd.getVertrektijd());
    params = params.append('vertrekstation', station.stationscode);

    return this.http.get<Drukte>(this.api, {params: params}).toPromise();
  }
}
