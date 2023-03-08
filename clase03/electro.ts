export class Electro {
  protected estaPrendido: boolean;
  public constructor() {
    this.estaPrendido = false;
  };
  public setIsOn(): void {
    this.estaPrendido = !this.estaPrendido;
  };
}