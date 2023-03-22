/*
Las clases abrastractas son clases normales, pero permiten tener métodos sin implementación. Una clase abstracta no permite instanciar objetos sino a través de las clases que la extienden.
Podemos pensar en esta clases abstractas como una anotación y también en cierto modo, como si se tratase de una lista de tareas. En la vida real solemos hacer breves anotaciones de tareas pendientes sin entrar en detalles de cómo realizarlas. Se trata de no olvidarnos nada y de evitar hacer borrón y cuenta nueva, rehaciendo cosas que ya teníamos resueltas.

Estas clases abstractas funcionan como una clase que declara la existencia de métodos más no su implementación -> esto lo haremos en la subclases. Una clase abstracta puede contener métodos no abstractos, PERO AL MENOS UNO DEBE SERLO.
*/

abstract class Vegetal {
  private nombre: string;
  private variedad: string;
  public constructor(nombre: string, variedad: string) {
    this.nombre = nombre;
    this.variedad = variedad;
  };
  public abstract getVegetal(): void;
};

class TomatePerita extends Vegetal {
  private precio: number;
  public constructor(precio: number) {
    super("Tomate", "Perita");
    this.precio = precio;
  }
  public setPrecio(precio: number): number {
    return this.precio = precio;
  }
  //override del método
  public getVegetal(): TomatePerita {
    return this;
  }
}

const prod01: TomatePerita = new TomatePerita(399);
console.log(prod01.getVegetal());
prod01.setPrecio(1200);
console.log(prod01.getVegetal());


