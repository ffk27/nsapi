import {Component, Input, OnInit} from '@angular/core';
import {TreindrukteService} from "../treindrukte.service";
import {Drukte} from "../drukte";
import {Vertrektijd} from "../vertrektijd";
import {Station} from "../station";

@Component({
  selector: 'app-treindrukte',
  templateUrl: './treindrukte.component.html',
  styleUrls: ['./treindrukte.component.css'],
  providers: [TreindrukteService]
})
export class TreindrukteComponent implements OnInit {
  @Input() station: Station;
  @Input() vertrektijd: Vertrektijd;
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
