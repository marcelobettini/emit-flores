import { Electro } from "./electro";
export class Televisor extends Electro {
  protected canalActual: number;
  protected volumenActual: number;
  public constructor() {
    super();
    this.canalActual = 1;
    this.volumenActual = 0;
  };
  public getInfo(): void {
    if (this.estaPrendido)
      console.log(`
    --------------------
            Info
    --------------------
    Canal:   ${this.canalActual}
    Volumen: ${this.volumenActual}
    `);
  };
};