import { Televisor } from "./televisor";
import { Electro } from "./electro";
import { SmartTV } from "./smartTv";

const tele = new SmartTV();
const oldTv = new Televisor();
oldTv.setIsOn();
oldTv.getInfo();
tele.setIsOn();
tele.getInfo();
const deviceX = new Electro();
console.log(deviceX instanceof SmartTV);
console.log(deviceX instanceof Televisor);
console.log(deviceX instanceof Electro);


