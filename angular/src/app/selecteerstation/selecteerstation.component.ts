import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StationService} from "../services/station.service";
import {Station} from "../model/station";

@Component({
  selector: 'app-selecteerstation',
  templateUrl: './selecteerstation.component.html',
  styleUrls: ['./selecteerstation.component.css'],
  providers: [StationService]
})
export class ZoekstationComponent implements OnInit {
  @Output() geselecteerd = new EventEmitter<Station>();
  station: Station;
  stations: [Station];

  constructor(private stationService: StationService) { }

  ngOnInit() {
  }

  selecteer(station: Station) {
    this.station = station;
    this.stations = null;
    this.geselecteerd.emit(station);
  }

  zoek(q: string): void {
    q = q.trim();
    if (q.length > 1) {
      this.stationService.getStations(q).then(res => {
        if (!res['error']) {
          this.stations = res;
        }
      });
    }
  }
}
