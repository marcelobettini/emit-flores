import { Engine } from "./engine";
import { Tyre } from "./tyre";
//encapsulamiento a full, bro
//parámetros opcionales en el constructor: ojota, la propiedad no es opcional, debe tener algo...
class Student {
  private dni: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  public constructor(dni: string, firstName: string, lastName: string, email?: string) {
    this.dni = dni;
    this.firstName = firstName;
    this.lastName = lastName;
    email ? this.email = email : this.email = "no tiene"; //falsy values.. undefined, null, etc..
  };
  public showData(): void {
    console.log(`
    ------------------------
    DATOS DEL ALUMNO
    ------------------------
    DNI      : ${this.dni} 
    NOMBRE   : ${this.firstName}
    APELLIDO : ${this.lastName}
    EMAIL    : ${this.email}
    `);
  };
  public setDni(dni: string): void {
    this.dni = dni;
  }
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }
}

const s001: Student = new Student("56887999", "Nicolás", "Mansilla");
s001.showData();
s001.setFirstName("Nicolás Albert");
s001.showData();



//composición de clases
//las clases Engine y Tyre son importadas de sus respectivos archivos. In real life, preferimos crear cada clase en su propio archivo. Naming convention: nombre de archivo en camelcase.

class Vehicle {
  private make: string;
  private model: string;
  private engine: Engine;
  private tyres: Tyre[];
  public constructor(make: string, model: string, engine: Engine, tyres: Tyre[]) {
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.tyres = tyres;
  }
  public getVehicle(): void {
    console.log(`
    -----------------------
      DATOS DEL VEHÍCULO
    -----------------------
    Marca     : ${this.make} 
    Modelo    : ${this.model}
    Motor     : ${this.engine}
    Cubiertas : ${this.tyres}
    `);

  }
}

const myEngine = new Engine("Grandote");
const myTyres: Tyre[] = [new Tyre(20), new Tyre(20)];

const myBike = new Vehicle("Triumph", "Banana", myEngine, myTyres);

myBike.getVehicle();