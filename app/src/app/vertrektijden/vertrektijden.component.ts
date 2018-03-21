import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Station} from "../model/station";
import {Departure} from "../model/departure";
import {DepartureService} from "../services/departure.service";
import {TreindrukteService} from "../services/treindrukte.service";
import {TreininfoService} from "../services/treininfo.service";

@Component({
  selector: 'app-vertrektijden',
  templateUrl: './vertrektijden.component.html',
  styleUrls: ['./vertrektijden.component.css'],
  providers: [DepartureService, TreindrukteService, TreininfoService]
})
export class VertrektijdenComponent implements OnInit, OnChanges {
  @Input() station: Station;
  @Input() gefilterdeTijden: Departure[];
  @Output() opgehaald = new EventEmitter<Departure[]>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.station && this.station) {
      this.vertrektijdService.getVertrektijden(this.station).then(res => {
        if (res && !res['error']) {
          this.opgehaald.emit(res);
        }
      });
    }
  }

  constructor(private vertrektijdService: DepartureService,
              private treindrukteService: TreindrukteService,
              private treininfoService: TreininfoService) { }

  ngOnInit() {
  }

  alleDruktes(): void {
    for (let vertrektijd of this.gefilterdeTijden) {
      this.getDrukte(vertrektijd);
    }
  }

  getDrukte(vertrektijd: Departure): void {
    this.treindrukteService.getDrukte(this.station, vertrektijd).then(res => {
      if (!res['error']) {
        if (res.drukte) {
          vertrektijd.drukte = res.drukte;
          this.getTreininfo(vertrektijd);
        }
      }
    });
  }

  getTreininfo(vertrektijd: Departure) {
    this.treininfoService.getDrukte(this.station, vertrektijd).then(res => {
      if (!res['error']) {
        let zitplaatsen = 0;
        res && res.info && res.info.forEach(info => {
          info && info.materieeldelen && info.materieeldelen.forEach(matdeel => {
            if (matdeel.mat.zitplaatsen) {
              zitplaatsen += matdeel.mat.zitplaatsen.klapstoelTweedeKlas;
              zitplaatsen += matdeel.mat.zitplaatsen.zitplaatsTweedeKlas;
            }
          })
        });
        vertrektijd.aantalMensen = zitplaatsen / 100 * vertrektijd.drukte;
      }
    }).catch(rej => console.error(rej));
  }
}
