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
  getDrukte
}
