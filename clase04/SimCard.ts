import { v4 } from 'uuid';
export class SimCard {
  private id: string;
  private carrier: string;
  private number: number;
  public constructor(carrier: string, number: number) {
    this.id = v4();
    this.carrier = carrier;
    this.number = number;
  };
  public getInfo(): SimCard {
    return this;
  }
}