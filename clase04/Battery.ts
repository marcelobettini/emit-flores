export class Battery {
  private capacity: number;
  private make: string;
  private model: string;
  public constructor(capacity: number, make: string, model: string) {
    this.capacity = capacity;
    this.make = make;
    this.model = model;
  };
  public getInfo(): Battery {
    return this;
  }
}