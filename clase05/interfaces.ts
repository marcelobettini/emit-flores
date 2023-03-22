interface iVehicle {
  readonly make: string;//public by default  
  speedUp(n: number): number;
  getSpeed(): number;
} //si ponemos el método frenar NO tendríamos un problema -> porque no todos frenan igual -> pero la interfaz no implementa un pomo 😏
//deberíamos incluir en nuestro contrato que todos los vehículos frenan 🤔


class FamilyCar implements iVehicle {
  readonly make: string;
  private year: number;
  private model: string;
  private maxSpeed: number;
  private speed: number;
  public constructor(year: number, make: string, model: string, maxSpeed: number) {
    this.speed = 0;
    this.make = make;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.year = year;
  }
  speedUp(n: number): number {
    return this.speed += n;
  }
  getSpeed(): number {
    return this.speed;
  }
}

class RaceCar implements iVehicle {
  private speed: number;
  private model: string;
  private maxSpeed: number;
  private category: string;
  readonly make: string;
  public constructor(make: string, model: string, maxSpeed: number, category: string) {
    this.speed = 0;
    this.make = make;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.category = category;
  }
  overdrive(): number {
    return this.speed += 50;
  }
  speedUp(n: number): number {
    return this.speed += n;
  }
  getSpeed(): number {
    return this.speed;
  }
}

const car01: FamilyCar = new FamilyCar(1990, "Volvo", "ForEver", 200);
const raceCar01: RaceCar = new RaceCar("Fiat", "Super Europa", 300, "Super Turismo");
raceCar01.speedUp(20);
console.log(raceCar01.getSpeed());
raceCar01.overdrive();
console.log(raceCar01.getSpeed());

// podemos implementar más de una interfaz en una clase

interface Actor {
name:string;
genre:string;
}

interface Singer {
  album:string
  genre:string
}

class PoliArtista implements Actor, Singer{
  name:string;
  genre:string;
  album:string
}


//--RESUMEN--
/*Interfases -> contratos que las clases deben respetar. Los miembros datos son públicos por defecto. Ojo, esto viola el encapsulamiento. Podemos tener interfases sin props, sólo con métodos. También podemos hacer que las variables sean finales con readonly (en  la clase que la implementa, podemos agregar ese decriptor también en la interfaz por una cuestión de legibilidad del código)
*/

interface ItvShow {
  readonly title: string; //la variable será final con readonly
  info(): string;
}

class Sitcom implements ItvShow {
  readonly title: string;
  private firstAired: Date;
  constructor(title: string, firstAired: Date) { //date mm/dd/yyyy
    this.title = title;
    this.firstAired = firstAired;
  };
  info(): string {
    return this.title;
  }
}

const sit01 = new Sitcom("Friends", new Date('12/9/2004'));
//sit01.title = "Amigos"; //no puedo cambiarlo