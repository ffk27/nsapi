import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Station} from "../model/station";
import {Departure} from "../model/departure";
import {DepartureService} from "../services/departure.service";

@Component({
  selector: 'app-vertrektijden',
  templateUrl: './vertrektijden.component.html',
  styleUrls: ['./vertrektijden.component.css'],
  providers: [DepartureService]
})
export class VertrektijdenComponent implements OnInit, OnChanges {
  @Input() station: Station;
  vertrektijden: [Departure];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.station && this.station) {
      this.vertrektijdService.getVertrektijden(this.station).then(res => {
        if (res && !res['error']) {
          this.vertrektijden = res;
        }
      });
    }
  }

  constructor(private vertrektijdService: DepartureService) { }

  ngOnInit() {
  }

  getMaterieel(vertrektijd: Departure): string {
    let materieel = '';
    for (let vleugel of vertrektijd.wings) {
      for (let mat of vleugel.material) {
        materieel += mat.type + ' ';
      }
    }
    return materieel;
  }

  getVertrektijd(vertrektijd: Departure): string {
    const date = new Date(vertrektijd.departureTime);
    return this.pad(date.getHours()) + ':' + this.pad(date.getMinutes());
  }

  pad(number: number): string {
    if (number < 10) {
      return '0' + number;
    }
    return ''+number;
  }
}
