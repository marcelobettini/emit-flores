function logger() {
  console.log("1- sync directo al call stack");
  setTimeout(() => console.log("2- mensaje async"), 0);
  prom().then(() => console.log("3- mensaje desde Promesa"));
  console.log("4- sync directo al call stack");
}

function prom() {
  return Promise.resolve();
}

logger();
