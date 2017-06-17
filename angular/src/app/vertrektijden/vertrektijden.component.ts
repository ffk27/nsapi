import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Station} from "../station";
import {Vertrektijd} from "../vertrektijd";
import {VertrektijdService} from "../vertrektijd.service";

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

}
