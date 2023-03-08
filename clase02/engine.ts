export class Engine {
  private type: string;
  public constructor(type: string) {
    this.type = type;
  }
  getEngine() {
    console.log("Engine type:", this.type);
  }
};