export class Materieel {
  mattype: string;
  afbeelding: string;
  zitplaatsen: {
    staanplaatsEersteKlas: number;
    staanplaatsTweedeKlas: number;
    zitplaatsEersteKlas: number;
    zitplaatsTweedeKlas: number;
    klapstoelEersteKlas: number;
    klapstoelTweedeKlas: number;
  };
  faciliteiten: [string];
}
