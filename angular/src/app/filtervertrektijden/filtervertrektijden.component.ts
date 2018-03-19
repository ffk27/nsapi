import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Departure} from "../model/departure";

@Component({
  selector: 'app-filtervertrektijden',
  templateUrl: './filtervertrektijden.component.html',
  styleUrls: ['./filtervertrektijden.component.css']
})
export class FiltervertrektijdenComponent implements OnInit, OnChanges {
  @Input() vertrektijden: Departure[];
  @Output() gefilterdetijden = new EventEmitter<Departure[]>();
  vervoerders: any[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vertrektijden && this.vertrektijden) {
      this.getVervoerders();
    }
  }

  getVervoerders(): void {
    this.vervoerders = [];
    for (const dep of this.vertrektijden) {
      const vervoerder = dep.company + ' ' + dep.transportType;
      const verv = this.hasVervoerder(vervoerder);
      if (!verv) {
        this.vervoerders.push({ name: vervoerder, enabled: true, count: 1 });
      } else {
        verv.count++;
      }
    }
    this.sortVervoerders();
  }

  sortVervoerders(): void {
    for (const v of this.vervoerders) {
      for (let i = 0; i < this.vervoerders.length - (1 + i); i++) {
        let swapped;
        if (this.vervoerders[i + 1].count > this.vervoerders[i].count) {
          let temp = this.vervoerders[i];
          this.vervoerders[i] = this.vervoerders[i + 1];
          this.vervoerders[i + 1] = temp;
          if (i === this.vervoerders.length - 2 && swapped === false) {
            return;
          }
          swapped = true;
        }
        if (!swapped) {
          return;
        }
      }
    }
  }

  hasVervoerder(vervoerder): any {
    for (const verv of this.vervoerders) {
      if (verv.name === vervoerder) {
        return verv;
      }
    }
    return null;
  }

  toggle(verv): void {
    verv.enabled = !verv.enabled;
    this.refresh();
  }

  refresh(): void {
    const filtered = [];
    for (const dep of this.vertrektijden) {
      const vervoerder = dep.company + ' ' + dep.transportType;
      for (const verv of this.vervoerders) {
        if (verv.enabled && vervoerder === verv.name) {
          filtered[filtered.length] = dep;
        }
      }
    }
    this.gefilterdetijden.emit(filtered);
  }
}
