/* caso de uso: necesitamos un logger, pero hay dos versiones posibles. La fábrica examinará el caso y nos dará el que necesitamos*/

interface ILogger {
  info(message: string): void;
  error(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
}

/*Implementaremos dos formas distintas: el logger de producción con dos métodos y el de desarrollo, con los cuatro.*/

class ProductionLogger implements ILogger {
  info(message: string): void { };
  error(message: string): void {
    console.error(message);
  };
  warn(message: string): void {
    console.warn(message);
  };
  debug(message: string): void { };
}

class DevelopmentLogger implements ILogger {
  info(message: string): void {
    console.info(message);
  };
  error(message: string): void {
    console.error(message);
  };
  warn(message: string): void {
    console.warn(message);
  };
  debug(message: string): void {
    console.debug(message);
  };
}

/*Ahora que tenemos los loggers (nuestras líneas de montaje diferenciadas) crearemos la fábrica, que será la que , utilizando esas líneas de montaje, creará el objeto según corresponda*/

export class LoggerFactory {
  public static createLogger(): ILogger {
    if (process.env.NODE_ENV === 'production') {
      return new ProductionLogger();
    } else {
      return new DevelopmentLogger();
    }
  }
}