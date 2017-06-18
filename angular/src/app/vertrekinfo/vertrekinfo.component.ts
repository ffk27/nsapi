import { Component, OnInit } from '@angular/core';
import {Station} from "../model/station";

@Component({
  selector: 'app-vertrekinfo',
  templateUrl: './vertrekinfo.component.html',
  styleUrls: ['./vertrekinfo.component.css']
})
export class VertrekinfoComponent implements OnInit {
  station: Station;

  constructor() { }

  ngOnInit() {
  }

  selecteerStation(station: Station) {
    this.station = station;
  }
}
