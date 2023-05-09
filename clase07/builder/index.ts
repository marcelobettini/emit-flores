import fs from "fs"; //NODE core dependency 

interface IFileReader {
  isJSONFile(file: string): boolean;
  readText(file: string): string;
  readJSON(file: string): unknown;
}

/* Ahora creamos el directory scraper, que será usado por file reader para procesar los archivos que encuentre en el directorio*/

class DirScraper {
  constructor(public dirPath: string, public fileReader: IFileReader) { }
  scanFiles() {
    return fs.readdirSync(this.dirPath).reduce<Record<string, unknown>>((acc: Record<string, unknown>, file: string) => {
      if (this.fileReader.isJSONFile(file)) {
        acc[file] = this.fileReader.readJSON(`${this.dirPath}/${file}`);
      } else {
        acc[file] = this.fileReader.readText(`${this.dirPath}/${file}`);
      }
      return acc;
    }, {});
  }
}

/* implementamos el lector de archivos*/
class FileReader implements IFileReader {
  isJSONFile(file: string): boolean {
    return file.endsWith(".json");
  };
  readText(file: string): string {
    return fs.readFileSync(file, 'utf8').toString();
  };
  readJSON(file: string): unknown {
    return JSON.parse(fs.readFileSync(file, 'utf8').toString());
  };
}

// como ya tenemos la clase FileReader y DirScraper, solamente nos integrarlas
//client code:

const fileReader = new FileReader();
const dirScraper = new DirScraper('./dataFolder', fileReader);
const output = dirScraper.scanFiles();
console.log(output);
/* DirectoryScraper está acoplado de forma flexible al FileReader y podemos reutilizar ambos. Si quisiéramos parsear otro tipo de contenido, por ejemplo, el DirectoryScraper podría implementarlo de forma bastante sencilla. Y el file reader podría ser utilizado para leer otros tipos de archivos también.*/