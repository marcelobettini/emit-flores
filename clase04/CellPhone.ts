import { SimCard } from "./SimCard";
import { Battery } from "./Battery";

export class CellPhone {
  private make: string;
  private model: string;
  private simcard: SimCard[];
  private battery: Battery;
  public constructor(make: string, model: string, battery: Battery) {
    this.make = make;
    this.model = model;
    this.battery = battery;
    this.simcard = [];
  };
  public getInfo(): CellPhone {
    return this;
  };
  public setSimCard(simcard: SimCard) {
    this.simcard.push(simcard);
  };
  public removeSimCard(simcard: SimCard) {
    const newSimStatus = this.simcard.filter(sim => sim !== simcard);
    this.simcard = newSimStatus;
  }
}