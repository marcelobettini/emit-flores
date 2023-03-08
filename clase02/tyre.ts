export class Tyre {
  private size: number;
  public constructor(size: number) {
    this.size = size;
  }
  getSize() {
    console.log("Tyre size:", this.size);
  }
};