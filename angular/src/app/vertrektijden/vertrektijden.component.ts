import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Station} from "../model/station";
import {Vertrektijd} from "../model/vertrektijd";
import {VertrektijdService} from "../services/vertrektijd.service";

@Component({
  selector: 'app-vertrektijden',
  templateUrl: './vertrektijden.component.html',
  styleUrls: ['./vertrektijden.component.css'],
  providers: [VertrektijdService]
})
export class VertrektijdenComponent implements OnInit, OnChanges {
  @Input() station: Station;
  vertrektijden: [Vertrektijd];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.station && this.station) {
      this.vertrektijdService.getVertrektijden(this.station).then(res => {
        if (res && !res['error']) {
          this.vertrektijden = res;
        }
      });
    }
  }

  constructor(private vertrektijdService: VertrektijdService) { }

  ngOnInit() {
  }

  getMaterieel(vertrektijd: Vertrektijd): string {
    let materieel = '';
    for (let vleugel of vertrektijd.vleugels) {
      for (let mat of vleugel.mat) {
        materieel += mat[0] + ' ';
      }
    }
    return materieel;
  }
}
