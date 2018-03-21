export class Departure {
  departureTime: string;
  delay: number;
  destination: string;
  originalDestination: string;
  via: string;
  platform: string;
  platformChanged: boolean;
  company: string;
  transportType: string;
  transportCode: string;
  serviceNumber: string;
  id: string;
  cancelled: boolean;
  status: string;
  remarks: string;
  tips: string;
  wings: [{
    destination: string;
    material: [{
      destination: string;
      type: string;
      number: string;
    }];
    stops: any;
  }];
  realDepartureTime: string;
  countdown: number;
  service_date: string;
  url: string;
  drukte: number;
  aantalMensen: number;

  getVertrektijd(): string {
    const date = new Date(this.departureTime);
    return this.pad(date.getHours()) + ':' + this.pad(date.getMinutes());
  }

  getMaterieel(): string {
    let materieel = '';
    for (let vleugel of this.wings) {
      for (let mat of vleugel.material) {
        materieel += mat.type + ' ';
      }
    }
    return materieel;
  }

  getDatum(): string {
    const departuredate = new Date(this.departureTime);
    const datum = departuredate.getFullYear() + '-'
    + this.pad(departuredate.getMonth() + 1) + '-'
    + this.pad(departuredate.getDate());
    return datum;
  }

  private pad(number: number): string {
    if (number < 10) {
      return '0' + number;
    }
    return ''+number;
  }
}