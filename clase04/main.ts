import { CellPhone } from "./CellPhone";
import { SimCard } from "./SimCard";
import { Battery } from "./Battery";


const bat01: Battery = new Battery(3000, "ElChinoLoco", "dalequessssplota km-998");
console.log(bat01.getInfo());

const phone01: CellPhone = new CellPhone("Motorola", "Razr V3", bat01);
console.log(phone01.getInfo());
const sim01: SimCard = new SimCard("AT&T", 5492494609742);
const sim02: SimCard = new SimCard("Movistar", 9898982342342);
console.log(sim01.getInfo());
phone01.setSimCard(sim01);

console.log(phone01.getInfo());
phone01.removeSimCard(sim02);//no quita una sim que no está en el cellphone
phone01.removeSimCard(sim01);// esta sí la hace percha
console.log(phone01.getInfo());