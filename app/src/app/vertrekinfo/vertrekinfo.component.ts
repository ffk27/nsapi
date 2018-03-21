import { Component, OnInit } from '@angular/core';
import {Station} from "../model/station";
import {Departure} from "../model/departure";

@Component({
  selector: 'app-vertrekinfo',
  templateUrl: './vertrekinfo.component.html',
  styleUrls: ['./vertrekinfo.component.css']
})
export class VertrekinfoComponent implements OnInit {
  station: Station;
  vertrektijden: Departure[];
  gefilterdeTijden: Departure[];

  constructor() { }

  ngOnInit() {
  }

  selecteerStation(station: Station) {
    this.station = station;
  }

  setVertrektijden(vertrektijden: Departure[]) {
    this.vertrektijden = vertrektijden;
    this.gefilterdeTijden = vertrektijden;
  }

  setGefilterdeTijden(vertrektijden: Departure[]) {
    this.gefilterdeTijden = vertrektijden;
  }
}
