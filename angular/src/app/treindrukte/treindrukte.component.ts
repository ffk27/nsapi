import {Component, Input, OnInit} from '@angular/core';
import {TreindrukteService} from "../services/treindrukte.service";
import {Drukte} from "../model/drukte";
import {Departure} from "../model/departure";
import {Station} from "../model/station";

@Component({
  selector: 'app-treindrukte',
  templateUrl: './treindrukte.component.html',
  styleUrls: ['./treindrukte.component.css'],
  providers: [TreindrukteService]
})
export class TreindrukteComponent implements OnInit {
  @Input() station: Station;
  @Input() vertrektijd: Departure;
  drukte: Drukte;

  constructor(private treindrukteService: TreindrukteService) { }

  ngOnInit() {
    this.treindrukteService.getDrukte(this.station,this.vertrektijd).then(res => {
      if (!res['error']) {
        this.drukte = res;
      }
    });
  }
}
